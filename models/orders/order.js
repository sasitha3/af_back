const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const newOreder = new Schema ({
    orderId: {
        type:String,
        required: [true, 'Name field is required']
    },
    drugId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    requireDate: {
        type: Date,
        required: true
    },
    status: {
        type: String

    },
    entryDetails: {
        EmployeeName: {
            type: String
        },
        date:{
            type: Date,
            default: Date.now()
        }
    }
});

const Order = mongoose.model('orders', newOreder);

module.exports = Order;