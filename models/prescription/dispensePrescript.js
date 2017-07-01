const mongoose = require('mongoose');
const Schema = mongoose.Schema;


    const DispenseDetails = new Schema ({
        drugname: {
            type: String,
        },    
        dosage: {
            type: Number,
        },
        frequency: {
            type: String,
        },
        period: {
            type: String,
        },
        quantity: {
            type: Number
        }
});

const dispense = mongoose.model('dispenseDrugs', DispenseDetails);
module.exports = dispense;