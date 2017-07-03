const Order = require('../models/orders/order');
const Deliver = require('../models/orders/dilivered');
const OrderEmail = require('../models/orders/orderEmail');
const Reject = require('../models/orders/reject');
const Request = require('../models/orders/requested');
const Vendor = require('../models/orders/vendor');

function load(req, res, next, id) {
    Deliver.get(id)
        .then((deliver) => {
            req.deliver = deliver; // eslint-disable-line no-param-reassign
            return next();
        })
        .catch(e => next(e));
}
function insert(req, res, next){

    var dbinsSelect = {};

    if( req.path == '/request'){

        dbinsSelect = new Request(req.body);

    }else if( req.path == '/rejects'){

        dbinsSelect = new Reject(req.body);

    }else if( req.path == '/vendors'){
        dbinsSelect = new Vendor(req.body);
    }else if( req.path == '/messages'){
        dbinsSelect = new OrderEmail(req.body);
    }else if( req.path == '/delivers' ){

        dbinsSelect = new Deliver(req.body);

    }
    dbinsSelect.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}

/*
* display database list according to the uri
* /<relevent url>
* */
function list(req, res){

    var dbSelect = 'fail';

    if( req.path == '/delivers'){
        dbSelect = Deliver;
    }else if( req.path == '/request'){
        dbSelect = Request;
    }else if( req.path == '/rejects'){
        dbSelect = Reject;
    }else if( req.path == '/vendors'){
        dbSelect = Vendor;
    }else if( req.path == '/messages'){
        dbSelect = OrderEmail;
    }

    dbSelect.find(function (err, Order) {
        if (err) return console.error(err);
       // console.log(Order);
        res.send(Order);
    });
}
function update(req, res, next) {
    const deliver = req.deliver;
    deliver.status = req.body.status;

    deliver.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}


module.exports = {insert, list, update, load};