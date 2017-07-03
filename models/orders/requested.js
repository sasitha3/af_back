/**
 * Created by PAVANI on 6/29/2017.
 */
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const requestedOrder = new Schema ({

    orderId: {
        type: String
    },
    vendor: {
        type: String
    },
    requireDate: {
        type: Date
    },
    quantity:{
        type: String
    },
    status: {
        type: String
    },

    entryDetails: {
        EmployeeName: {
            type: String
        },
        date:{
            type: Date,
            default: Date.now()
        }
    }
});

requestedOrder.statics = {

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

const ReqOrder = mongoose.model('reqOrders', requestedOrder);

module.exports = ReqOrder;