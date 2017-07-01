const mongoose = require('mongoose');
const Schema = mongoose.Schema;


    const DoctorDetails = new Schema ({
        PrescriptionID:{
            type: Number
        },
        docname: {
            type:String,
            required: [true, 'Name field is required']
        },
        patientname: {
            type:String,
            required: [true, 'Name field is required']
        },
        patientAge: {
            type:String,
            required: [true, 'Name field is required']
        },
        disease: {
            type:String,
            required: [true, 'Name field is required']
        },
        createDate: {
            type:Date,
            default: Date.now()
        }
});

const doctors = mongoose.model('doctor', DoctorDetails);
module.exports = doctors;