'use strict';

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const drugsNeedToBeRequested = new Schema ({
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

const DrugsNeedToBeRequested = mongoose.model('drugNeedToBeRequested', drugsNeedToBeRequested);

module.exports = DrugsNeedToBeRequested;
