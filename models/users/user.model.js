const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const newUser = new Schema ({
    userName: {
        type:String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String
    },
    userRole: {
        type :String
    }
});

const User = mongoose.model('user', newUser);

module.exports = User;