const Bebida = require("./bebidas.models");

const indexGet = async (req, res, next) => {
    try{
        const bebidas = await Bebida.find();
        return res.status(200).json(bebidas);
    } catch(error){
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const found = await Bebida.findById(id);
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        const bebidaToBeCreated = new Bebida(req.body);

        const created = await bebidaToBeCreated.save();

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
        console.log('fields in bebida', options);
        const edited = await Bebida.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } catch(error) {
        return next(error);
    }
};

const deleteBebida = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Bebida.deleteOne({ _id: id});
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
    deleteBebida,
};