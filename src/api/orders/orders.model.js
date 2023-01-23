const mongoose= require( 'mongoose');
const Dishe = require('../dishes/dishes.models');
const Combo = require('../combos/combos.model');
const orderSchema = new mongoose.Schema(

    {
        name:{
            type: String,
            required:[true, "Must type the order name"],
        },

        dishes:{
            type: [mongoose.Types.ObjectId],
            ref :  "dishes" 
            
        },
        combos:{
            type: [mongoose.Types.ObjectId],
            ref :  "combos" 
            
        },
        
        price:{
            type: Number,
            required: true

        }


    },
    {
        timestamps:true,
    }
);

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;