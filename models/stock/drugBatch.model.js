'use strict';

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const drugBatches = new Schema ({
    drugName: {
        type:String,
        required: [true, 'Name field is required']
    },
    drugCategory: {
        type:String,
        required: [true, 'Name field is required']
    },
    drugType: {
        type:String
    },
    quantity: {
        type:Number

    },
    manufacturedDate: {
        type:String,
    },
    expiryDate: {
        type:Date
    }
});

const DrugBatch = mongoose.model('drugBatch', drugBatches);

module.exports = DrugBatch;
