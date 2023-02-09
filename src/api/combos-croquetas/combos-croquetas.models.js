const mongoose= require( 'mongoose');
const Bebida = require('../bebidas/bebidas.models');
const Croqueta = require('../packs-croquetas/packs-croquetas.models')

const comboCroquetaSchema = new mongoose.Schema(

    {
        name:{
            type: String,
            required:[true, "Must type the combo name"],
        },

        bebida:{
            type: [mongoose.Types.ObjectId],
            ref :  "bebidas" ,
            required: true
        },

        packCroqueta:{
            type:[mongoose.Types.ObjectId],
            ref : "packCroquetas",
            required:true
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

const ComboCroqueta = mongoose.model("combosCroqueta", comboCroquetaSchema);

module.exports = ComboCroqueta;