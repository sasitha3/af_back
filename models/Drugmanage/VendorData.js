/**
 * Created by sacheen on 7/1/2017.
 */
/**
 * Created by sacheen on 5/10/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//making connection



var Vendor = new Schema({

    vendorvalue  : {type: String,required: true }



});

module.exports = mongoose.model('VendorData', Vendor);