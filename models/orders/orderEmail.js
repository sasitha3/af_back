/**
 * Created by PAVANI on 6/29/2017.
 */
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const emailOrder = new Schema ({
    to: {
        type:String,
        required: [true, 'Name field is required']
    },
    from: {
        type:String,
        required: [true, 'Name field is required']
    },
    messageSubject: {
        type:String,

    },
    messageBody: {
        type:String
    },
    drugs: {
        name: {
            type:String,
            required: true
        },
        requireDate:{
            type:Date,
            required: true
        }
    },
    date: {
        type: Date,
        default: Date.now
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

const EmailOrder = mongoose.model('email', emailOrder);

module.exports = EmailOrder;