const Croqueta = require("./packs-croquetas.models");

const indexGet = async (req, res, next) => {
    try{
        const croquetas = await Croqueta.find();
        return res.status(200).json(croquetas);
    } catch(error){
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const found = await Croqueta.findById(id);
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        const croquetaToBeCreated = new Croqueta(req.body);

        const created = await croquetaToBeCreated.save();

        return res.status(201).json(created);
    } catch (error){
        return next(error);
    }
};

const editPut = async(req, res, next) => {
    try {
        const { id } = req.params;
        const fields = {...req.body};
        const options = {new: true};
        console.log('fields in croqueta', options);
        const edited = await Croqueta.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } catch(error) {
        return next(error);
    }
};

const deleteCroqueta = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Croqueta.deleteOne({ _id: id});
        if (deleted.deletedCount) {
            return res.status(200).json("Element deleted with success");
        } else {
            return res.status(200).json("Can't find the element to delete");
        }
    } catch (error){
        return next(error);
    }
};

module.exports = {
    indexGet,
    getById,
    createPost,
    editPut,
    deleteCroqueta,
};