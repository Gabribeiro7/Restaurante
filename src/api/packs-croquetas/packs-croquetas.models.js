const mongoose = require( 'mongoose');

const croquetaSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "You must type a croquetas's name"],
            
        },
        description:{
            type: String,
            required: [true, "You must add adescription to the product"]
        },

        type:{
            type: String,
            required:[true, "You must add a croqueta's type"],
            enum:["vegetariana", "carne", "pescado", "dulce"]
        },

        price:{
            type: Number,
            required:[true, "You must type the croqueta's price"]
        },

        units:{
            type: Number,
            enum:[12, 6],
            required: ["You must add a certain number of croquetas"]
        },

        image:{
            type: String,

        }
    },
    {
        timestamps: true,
    }
);

const Croqueta = mongoose.model("croquetas", croquetaSchema);

module.exports = Croqueta;