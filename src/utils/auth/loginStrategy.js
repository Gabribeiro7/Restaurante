const bcrypt = require('bcrypt');
const Client = require("../../api/clients/clients.models");
const { isValidEmail, isValidPassword } = require("../validation");

const LocalStrategy = require("passport-local").Strategy;

const loginStrategy = new LocalStrategy(
    {
        usernameField: 'contactEmail',
        passwordField: 'password',
        passReqToCallback: true,
    }, 
    async (req, contactEmail, password, done ) => {
        try {
            if(!isValidEmail(contactEmail) || !isValidPassword(password)){
                const error = new Error('E-mail or password incorrect');
                return done(error, null);
            }
    
            const clientDB = await Client.findOne({ contactEmail });

            const isValidClientPassword = await bcrypt.compare(password, clientDB.password);

            if (!isValidClientPassword){
                const error = new Error('The password used does not match with the client password');
                error.status = 400;
                return done(error);
            }

            const formatted = clientDB.toObject();
            Reflect.deleteProperty(formatted, "password");

            return done(null, formatted);
        } catch (error) {
            return done(error, null);
        }
    }
    );

    module.exports = loginStrategy;