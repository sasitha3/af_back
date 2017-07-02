/**
 * Created by sacheen on 7/2/2017.
 */

/**
 * Created by sacheen on 5/10/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//making connection



var UnitTypeDrugDetails = new Schema({

    unitvalue : {type: String,required: true }



});

module.exports = mongoose.model('DrugUnitTypeData', UnitTypeDrugDetails);