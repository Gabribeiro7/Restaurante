const mongoose = require( 'mongoose');

const clientSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "You must type a client's name"],
        },

        contactEmail:{
            type: String,
            required: true,
            unique: [true, "You must add an e-mail"] 
        },
        password: {
            type: String,
            required: [true, 'You must insert a password'],
        },



        
    },
    {
        timestamps: true,
    }
);

const Client = mongoose.model("clients", clientSchema);

module.exports = Client;