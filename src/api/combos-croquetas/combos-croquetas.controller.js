const ComboCroqueta = require("./combos-croquetas.models");

const indexGet = async (req, res, next) => {
    try {
        const comboscroqueta = await ComboCroqueta.find().populate("croquetas" , { _id:0 , name:1 , precio:1 ,  } );
        return res.status(200).json(comboscroqueta);
    } catch (error) {
        return next(error);
    }
};

const getByCroqueta = async (req, res, next) => {
    try {
        const { croqueta } = req.params;
        const found = await ComboCroqueta.find({ croquetas: croqueta}).populate("croquetas");
        return res.status(200).json(found);
    } catch (error){
        return next (error);
    }
};

const getByCombo = async (req, res, next) => {
    try {
        const { combocroqueta } = req.params;
        const found = await ComboCroqueta.findOne({ combocroqueta: combocroqueta });
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const found = await ComboCroqueta.findById(id);
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        console.log(req.body);

        const combocroquetaToBeCreated = new ComboCroqueta(req.body);

        const created = await combocroquetaToBeCreated.save();

        return res.status(201).json(created);
    } catch (error) {
        return next(error);
    }
};

const editPut = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fields = { ...req.body };
        const options = { new: true };
        console.log("fields in comboscroqueta", options);
        const edited = await ComboCroqueta.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } catch (error) {
        return next(error);
    }
};

const deleteComboCroqueta = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await ComboCroqueta.deleteOne({ _id: id });
        if (deleted.deletedCount) {
            return res.status(200).json("Element deleted sucessfully");
        } else {
            return res.status(200).json("Can not find the element to delete");
        }
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    indexGet,
    getByCroqueta,
    getById,
    createPost,
    editPut,
    deleteComboCroqueta,
    getByCombo,
};