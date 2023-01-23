const passport = require("passport");
const Client = require("./clients.models");

const registerPost = (req, res, next) => {
    try {
        const done = (error, user) => {
            if(error) return next(error);
            return res.status(201).json(user);
        };

        passport.authenticate('registro', done)(req);

        // return res.status(200).json('Register working again');
    } catch (error) {
        return next(error);
    }
};
const indexGet = async (req, res, next) => {
    try{
        const client = await Client.find();
        return res.status(200).json(client);
    } catch(error){
        return next(error);
    }
};

const loginPost = (req, res, next) => {
    try {
        const done = (error, user) => {
            if(error) return next(error);
            return res.status(201).json(user);
        };

        passport.authenticate('logear' , done)(req);
    } catch (error) {
        return next(error);
    }
};
const deleteClient = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Client.deleteOne({ _id: id });
        if (deleted.deletedCount) {
            return res.status(200).json("Client deleted sucessfully");
        } else {
            return res.status(200).json("Can not find the client to delete");
        }
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    registerPost,
    loginPost,
    indexGet,
    deleteClient,
}