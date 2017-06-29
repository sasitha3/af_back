const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const deliveredOreder = new Schema ({
    deliveredId: {
        type:String,
        required: [true, 'Name field is required']
    },
    requestId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
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

const DelOrder = mongoose.model('delOrders', deliveredOreder);

module.exports = DelOrder;
