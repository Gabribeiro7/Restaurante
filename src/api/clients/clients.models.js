const mongoose = require("mongoose");
const Order = require('../orders/orders.model');

const clientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "You must type a client's name"],
        },

        contactEmail: {
            type: String,
            required: [true, "You must add an e-mail"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "You must insert a password"],
        },
        phonenumber: {
            type: Number,
            required: false,
            unique: true
        },
        adress: {
            type: String,
            required: false
        },
        clientOrders: {
            type: [mongoose.Types.ObjectId],
            ref: "orders"
        }
       
    },
    {
        timestamps: true,
    }
);

const Client = mongoose.model("clients", clientSchema);

module.exports = Client;