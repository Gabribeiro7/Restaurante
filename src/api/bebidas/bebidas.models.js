const mongoose = require( 'mongoose');

const bebidaSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "You must type a drink's name"],
            
        },
        
        price:{
            type: Number,
            required:[true, "You must type the drink's price"]
        },

        image:{
            type: String,

        }
    },
    {
        timestamps: true,
    }
);

const Bebida = mongoose.model("bebidas", bebidaSchema);

module.exports = Bebida;