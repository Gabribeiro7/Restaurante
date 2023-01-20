const mongoose= require( 'mongoose');
const Dishe = require('../dishes/dishes.models');

const orderSchema = new mongoose.Schema(

    {
        name:{
            type: String,
            required:[true, "Must type the order name"],
        },

        dishes:{
            type: mongoose.Types.ObjectId,
            ref : "dishes",
            required: true
        },
        
        price:{
            type: Number,
            
        }


    },
    {
        timestamps:true,
    }
);

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;