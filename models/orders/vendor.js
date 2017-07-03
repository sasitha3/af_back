/**
 * Created by PAVANI on 6/29/2017.
 */
/**
 * Created by PAVANI on 6/29/2017.
 */
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const vendors = new Schema ({
    id: {
        type:String,
        required: [true, 'Name field is required']
    },
    name: {
        type:String,
        required: [true, 'Name field is required']
    },
    address: {
        type:String,

    },
    contact: {
        type:String
    },
    email: {
        type:String,
        required: true

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

const Vendors = mongoose.model('vendor', vendors);

module.exports = Vendors;
