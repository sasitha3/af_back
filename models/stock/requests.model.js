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
        default:"New"
    }


});
requests.statics = {

    get(id) {
        return this.findById(id)
            .exec()
            .then((user) => {
                if (user) {
                    return user;
                }
                const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
                return Promise.reject(err);
            });
    },


    list({ skip = 0, limit = 50 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(+skip)
            .limit(+limit)
            .exec();
    }
};

const Requests = mongoose.model('request', requests);

module.exports = Requests;
