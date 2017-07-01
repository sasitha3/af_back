'use strict';

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const requestingDrugs = new Schema ({
    drugName: {
        type:String,
        required: true
    },
    drugCategory: {
        type:String,
        required: true
    },

    drugType: {
        type:String
    },
    quantity: {
        type:Number

    }

});

const RequestingDrugs = mongoose.model('drugBatch', requestingDrugs);

module.exports = RequestingDrugs;
