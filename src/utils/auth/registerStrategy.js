const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt');
const Client = require("../../api/clients/clients.models");
const { isValidEmail, isValidPassword } = require("../validation");


const registerStrategy = new LocalStrategy(
    {
        usernameField: 'contactEmail',
        passwordField: 'password',
        passReqToCallback: true,
    }, async (req, contactEmail, password, done) => {
        try {
           const clientDB = await Client.findOne({ contactEmail: contactEmail.toLowerCase() });

           if(clientDB) {
            const error = new Error('The client already exists');
            return done(error, null);
           }
           if(!isValidEmail(contactEmail)) {
            const error = new Error("The email is not valid");
            return done(error, null);
           }

           if(!isValidPassword(password)) {
            const error = new Error("The password is not valid");
            return done(error, null);
           }

           const saltRounds = 10;
           const encryptedPassword = await bcrypt.hash(password, saltRounds);

           const clientToBeCreated = new Client({
                ...req.body,
                contactEmail,
                password: encryptedPassword,
           });

           const created = await clientToBeCreated.save();

           return done(null, created);


        } catch (error) {
            return done(error);
        }

        
    });

    module.exports = registerStrategy;