'use strict';

const Request = require('../models/stock/requests.model');
const Drugs = require('../models/stock/drugBatch.model');


function insert(req, res){
    const request = new Request(req.body);

    request.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}

function list(req, res){
    Drugs.find(function (err, Drugs) {
        if (err) return console.error(err);
        // console.log(Order);
        res.send(Drugs);
    });
}


module.exports = {insert, list}