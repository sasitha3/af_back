const User = require('../models/users/user.model');

function insertUser(req, res){
    const user = new User({
        userName: req.body.userName,
        password: req.body.password,
        userRole: req.body.userRole
    });

    user.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}

function findUser(req, res){
    User.find().exec().then(users => {
        res.json(users);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}

module.exports = {insertUser, findUser}
