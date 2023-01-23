const passport = require('passport');

const registerStrategy = require('./registerStrategy');

const loginStrategy = require('./loginStrategy');

const activateAutentication = () => {
    
    passport.use('registro', registerStrategy); 
    passport.use('logear', loginStrategy); 
};


module.exports = {
    activateAutentication,
};