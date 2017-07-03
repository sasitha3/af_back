const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('./config/config');

const route = require('./routes/api');

//set up the express app
const app = express();

//plugin bluebird promise in mongoose
mongoose.Promise = global.Promise;

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } }, function () {
    console.log('connected to the database');
});
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});

app.use(bodyParser.json());

//jwt Auth
// app.use(function (req, res, next) {
//
//     console.log(req.url);
//     if (req.url == '/api/authenticate') {
//         console.log('creating');
//         next();
//     } else {
//         console.log('already');
//         // check header or url parameters or post parameters for token
//         var token = req.body.token || req.param('token') || req.headers['x-access-token'];
//
//         // decode token
//         if (token) {
//             console.log(' ===============> ' + token);
//             // verifies secret and checks exp
//             //console.log('========>>>>>>> '+ app.get('superSecret'));
//             jwt.verify(token, app.get('superSecret'), function (decoded, err) {
//                 console.log('Decoder ->' + req.decoded);
//                 if (err) {
//                     return res.json({ success: false, message: 'Failed to authenticate token.' });
//                 } else {
//                     // if everything is good, save to request for use in other routes
//                     req.decoded = decoded;
//                     console.log(req.decoded);
//                     next();
//                 }
//             });
//
//         } else {
//
//             // if there is no token
//             // return an error
//             return res.status(403).send({
//                 success: false,
//                 message: 'No token provided.'
//             });
//
//         }
//     }
// });


//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//intialize route
app.use('/api',route);

//listen for request
app.listen( process.env.port || config.port, function () {
    console.log('Now listening for request on port ' + config.port);
});
