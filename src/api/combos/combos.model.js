const mongoose= require( 'mongoose');
const Dishe = require('../dishes/dishes.models');

const comboSchema = new mongoose.Schema(

    {
        name:{
            type: String,
            required:[true, "Must type the combo name"],
        },

        dishes:{
            type: [mongoose.Types.ObjectId],
            ref :  "dishes" ,
            required: true
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

const Combo = mongoose.model("combos", comboSchema);

module.exports = Combo;