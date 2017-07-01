'use strict';

const Report = require('../models/stock/report.model');

function list(req, res){
    Report.find(function (err, Order) {
        if (err) return console.error(err);
        // console.log(Order);
        res.send(Order);
    });
}

module.exports = {list}
