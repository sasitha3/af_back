const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
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
