const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const deliveredOreder = new Schema ({

    requestId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
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

deliveredOreder.statics = {

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

const DelOrder = mongoose.model('delOrders', deliveredOreder);

module.exports = DelOrder;
