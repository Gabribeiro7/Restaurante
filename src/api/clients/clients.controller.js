const passport = require("passport");
const Client = require("./clients.models");

const registerPost = (req, res, next) => {
    try {
        const done = (error, user) => {
            if(error) return next(error);
            return res.status(200).json(user);
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
        return res.status(200).json('Login working again');
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    registerPost,
    loginPost,
    indexGet,
}