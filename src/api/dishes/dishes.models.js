const mongoose = require( 'mongoose');

const disheSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "You must type a dishe's name"],
            
        },
        description:{
            type: String,
            required: [true, "You must add adescription to the product"]
        },

        type:{
            type: String,
            required:[true, "You must add a dishe's type"],
            enum:["entrante", "primero", "segundo", "postre", "bebida"]
        },

        precio:{
            type: Number,
            required:[true, "You must type the dishe's price"]
        },

        image:{
            type: String,

        }
    },
    {
        timestamps: true,
    }
);

const Dishe = mongoose.model("dishes", disheSchema);

module.exports = Dishe;