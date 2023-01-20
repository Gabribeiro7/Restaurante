const Dishe = require("./dishes.models");

const indexGet = async (req, res, next) => {
    try{
        const dishes = await Dishe.findOne();
        return res.status(200).json(dishes);
    } catch(error){
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const found = await Dishe.findById(id);
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        console.log(req.body);

        const disheToBeCreated = new Dishe(req.body);

        const created = await disheToBeCreated.save();

        return res.status.jso(created);
    } catch (error){
        return next(error);
    }
};

const editPut = async(req, res, next) => {
    try {
        const { id } = req.params;
        const fields = {...req.body};
        const options = {new: true};
        console.log('fields in dishe', options);
        const edited = await Dishe.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } catch(error) {
        return next(error);
    }
};

const deleteDishe = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Dishe.deleteOne({ _id: id});
        if (deleted.deletedCount) {
            return res.status(200).json("Eleement deleted with success");
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
    deleteDishe,
};

