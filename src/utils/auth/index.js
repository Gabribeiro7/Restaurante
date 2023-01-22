const passport = require('passport');

const registerStrategy = require('./registerStrategy');

const activateAutentication = () => {

};

passport.use('registro', registerStrategy); 

module.exports = {
    activateAutentication,
};