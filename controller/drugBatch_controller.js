'use strict';

const DrugBatch = require('../models/stock/drugBatch.model');

function insert(req, res){
    const drugBatch = new DrugBatch({
        drugName: req.body.drugName

    });

    drugBatch.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}

function list(req, res){
    DrugBatch.find(function (err, Order) {
        if (err) return console.error(err);
        // console.log(Order);
        res.send(Order);
    });
}

module.exports = {insert, list}
