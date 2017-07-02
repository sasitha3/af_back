'use strict';

const Request = require('../models/stock/requests.model');
const RequestingDrugs = require('../models/stock/requestingDrugs.model');


function insert(req, res){
    const request = new Request(req.body);

    request.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}


function list(req, res){
    RequestingDrugs.find(function (err, RequestingDrugs) {
        if (err) return console.error(err);
        console.log(RequestingDrugs);
        res.send(RequestingDrugs);

    });
}



module.exports = {insert, list};