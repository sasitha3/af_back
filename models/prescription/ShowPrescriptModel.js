/**
 * Created by MYPC on 5/10/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


    var ShowDetails = new Schema ({
        PrescriptionID: {
            type: Number
        },
        CreateDate: {
            type: Date,
            default: Date.now()
        },
        PrescriptionDate: {
            type: Date,
            default: Date.now()
        }
});

const details = mongoose.model('show', ShowDetails);
module.exports = details;