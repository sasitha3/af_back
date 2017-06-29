/**
 * Created by PAVANI on 6/29/2017.
 */
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const requestedOreder = new Schema ({
    requestId: {
        type:String,
        required: [true, 'Name field is required']
    },
    orderId: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
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

const ReqOrder = mongoose.model('reqOrders', requestedOreder);

module.exports = ReqOrder;