'use strict';

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const requests = new Schema ({
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
    requestQuantity: {
        type:Number
    },
    date:{
        type:Date
    }
    ,
    department:{
        type:String
    },
    status:{
        type:String,
        default:"Pending"
    }


});

const Requests = mongoose.model('request', requests);

module.exports = Requests;
