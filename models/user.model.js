const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cart = require('./cart.model');


const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        ownedStores: {
            type: [String], //type: [Store]
            required: false
        },
        cart: {
            type: Object,
            require: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);