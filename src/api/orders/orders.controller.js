const Order = require("./orders.model");

const indexGet = async (req, res, next) => {
    try {
        const orders = await Order.find().populate("dishes" , { _id:0 , name:1 , precio:1 } );
        return res.status(200).json(orders);
    } catch (error) {
        return next(error);
    }
};

const getByDishe = async (req, res, next) => {
    try {
        const { dishe } = req.params;
        const found = await dishe.find({ dishe: dishe});
        return res.status(200).json(found);
    } catch (error){
        return next (error);
    }
};

const getByOrder = async (req, res, next) => {
    try {
        const { dishe } = req.params;
        const found = await Order.findOne({ dishe });
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const found = await Order.findById(id);
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        console.log(req.body);

        const orderToBeCreated = new Order(req.body);

        const created = await orderToBeCreated.save();

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
        console.log("fields in orders", options);
        const edited = await Order.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    } catch (error) {
        return next(error);
    }
};

const deleteOrder = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Order.deleteOne({ _id: id });
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
    deleteOrder,
    getByOrder,
};