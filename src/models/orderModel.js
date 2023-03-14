const mongoose = require("mongoose");
const id = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    totalfee: {
        type: Number,
        required: true
    },
    services: {
        type: id,
        ref:'service',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('order', orderSchema)