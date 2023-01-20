const mongoose = require( 'mongoose');

const clientSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "You must type a client's name"],
        },

        
    }
)