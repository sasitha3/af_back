'use strict';

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const drugBatches = new Schema ({
    drugName: {
        type:String,
        required:true
    },
    drugCategory: {
        type:String,
        required:true
    },
    drugType: {
        type:String
    },
    quantity: {
        type:Number
    },
    manufacturedDate: {
        type:Date,
    },
    expiryDate: {
        type:Date
    }
});

const DrugBatch = mongoose.model('drugBatch', drugBatches);

module.exports = DrugBatch;
