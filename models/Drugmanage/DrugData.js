    /**
 * Created by sacheen on 5/10/2017.
 */

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    //making connection



    var DrugDetails = new Schema({

        category   : {type: String,required: true },
        name    : {type: String,required: true },
        dtype      : {type: String,required: true },
        utype      : {type: String,required: true },
        dlevel    : {type: Number,required: true },
        polevel    : {type: Number,required: true },
        remark  : {type: Number,required: true },
        vendor    : {type: String,required: true },


    });

    module.exports = mongoose.model('DrugData', DrugDetails);