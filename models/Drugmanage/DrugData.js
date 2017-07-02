    /**
 * Created by sacheen on 5/10/2017.
 */

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;


    var DrugDetails = new Schema({

        category   : {type: String,required: true },
        name    : {type: String,required: true },
        dtype      : {type: String,required: true },
        utype      : {type: String,required: true },
        dlevel    : {type: String,required: true },
        polevel    : {type: String,required: true },
        remark  : {type: String,required: true },
        vendor    : {type: String,required: true }


    });

    module.exports = mongoose.model('DrugData', DrugDetails);