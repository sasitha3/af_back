const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const rejectedOreder = new Schema ({

    orderId: {
        type: String,
        required: true
    },
        quantity: {
        type: Number,
        required: true
    },
    reason: {
        type: String
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

const RejOrder = mongoose.model('rejOrders', rejectedOreder);

module.exports = RejOrder;
