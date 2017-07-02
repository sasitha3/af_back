var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var express = require('express');
var app = express();
var config = require('../config/config'); // get our config file

app.set('superSecret', config.secret); // secret variable

const User = require('../models/users/user.model');

function login(req, res) {
    // find the user
    User.findOne({
        userName: req.body.userName
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            console.log('no User');
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, app.get('superSecret'), {
                    expiresIn: 86400 // expires in 24 hours
                });

                res.json({
                    success: true,
                    userName: user.userName,
                    userRole: user.userRole,
                    token: token
                });
            }

        }

    });


}

module.exports = { login }