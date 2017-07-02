'use strict';

const Request = require('../models/stock/requests.model');
const DrugBatch = require('../models/stock/drugBatch.model');
const Report = require('../models/stock/report.model');

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

function viewRequests(req, res){
    Request.find(function (err, Request) {
        if (err) return console.error(err);
        console.log(Request);
        res.send(Request);

    });
}

function drugTableLoad(req, res){
    DrugBatch.find(function (err, DrugBatch) {
        if (err) return console.error(err);
        console.log(DrugBatch);
        res.send(DrugBatch);

    });
}


function deleteRequest(req,res) {
    console.log("i came here");
    console.log(req.param.id);
    drugdetails.remove({_id: req.params.id}).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
}







module.exports = {insert, list,addBatch,viewRequests,drugTableLoad,deleteRequest};