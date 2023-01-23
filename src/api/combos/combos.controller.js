const Combo = require("./combos.model");

const indexGet = async (req, res, next) => {
    try {
        const combos = await Combo.find().populate("dishes" , { _id:0 , name:1 , precio:1 } );
        return res.status(200).json(combos);
    } catch (error) {
        return next(error);
    }
};

const getByDishe = async (req, res, next) => {
    try {
        const { dishe } = req.params;
        const found = await dishe.findOne({ dishe: dishe});
        return res.status(200).json(found);
    } catch (error){
        return next (error);
    }
};

const getByCombo = async (req, res, next) => {
    try {
        const { combo } = req.params;
        const found = await Combo.findOne({ combo: combo });
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const found = await Combo.findById(id);
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        console.log(req.body);

        const comboToBeCreated = new Combo(req.body);

        const created = await comboToBeCreated.save();

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
        console.log("fields in combos", options);
        const edited = await Combo.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } catch (error) {
        return next(error);
    }
};

const deleteCombo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Combo.deleteOne({ _id: id });
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
    getByDishe,
    getById,
    createPost,
    editPut,
    deleteCombo,
    getByCombo,
};