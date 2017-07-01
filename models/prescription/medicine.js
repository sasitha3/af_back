const mongoose = require('mongoose');
const Schema = mongoose.Schema;


    const MedicineDetails = new Schema ({
        drugname: {
            type: String,
        },    
        dosage: {
            type: Number,
        },
        frequency: {
            type: String,
        },
        period: {
            type: String,
        }
});

const medical = mongoose.model('medicine', MedicineDetails);
module.exports = medical;