'use strict';

const Request = require('../models/stock/requests.model');
const Drugs = require('../models/stock/drugBatch.model');


function load(req, res, next, id) {
    Request.get(id)
        .then((request) => {
            req.request = request; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
}


function insert(req, res){
    const request = new Request(req.body);

    request.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}

function list(req, res){
    Request.find(function (err, Order) {
    RequestingDrugs.find(function (err, RequestingDrugs) {
        if (err) return console.error(err);
        // console.log(Order);
        res.send(Order);
        console.log(RequestingDrugs);
        res.send(RequestingDrugs);

    });
}
function update(req, res, next) {
    const request = req.request;
    request.status = req.body.status;

    request.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}

module.exports = {insert, list, load, update}