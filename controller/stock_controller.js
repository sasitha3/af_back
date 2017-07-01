'use strict';

const Request = require('../models/stock/requests.model');
//const RequestingDrugs = require('../models/stock/requestingDrugs.model');
const DrugBatch = require('../models/stock/drugBatch.model');

function insert(req, res){
    const request = new Request(req.body);

    request.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}


function list(req, res){
    DrugBatch.find(function (err, DrugBatch) {
        if (err) return console.error(err);
        console.log(DrugBatch);
        res.send(DrugBatch);

    });
}

function addBatch(req, res){
    const drugBatch = new DrugBatch(req.body);

    drugBatch.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}





module.exports = {insert, list,addBatch};