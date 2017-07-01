'use strict';

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const drugs = new Schema ({
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

const Drug = mongoose.model('drug', drugs);

module.exports = Drug;
