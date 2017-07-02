const Order = require('../models/orders/order');
const Deliver = require('../models/orders/dilivered');
const OrderEmail = require('../models/orders/orderEmail');
const Reject = require('../models/orders/reject');
const Request = require('../models/orders/requested');
const Vendor = require('../models/orders/vendor');

function insert(req, res){

    var dbinsSelect = {};

    if( req.path == '/request'){

        dbinsSelect = new Request({
            requestId: req.body.rejectId,
            orderId: req.body.orderId,
            vendor: req.body.vendor,
            requireDate: req.body.requireDate,
            status: req.body.status
        });

    }else if( req.path == '/rejects'){

        dbinsSelect = new Reject({
            rejectId: req.body.rejectId,
            orderId: req.body.orderId,
            quantity: req.body.quantity,
            reason: req.body.reason,
            status: req.body.status,
        });

    }else if( req.path == '/vendors'){
        dbinsSelect = new Vendor({
            id: req.body.id,
            name: req.body.name,
            address: req.body.address,
            contact: req.body.contact,
            email: req.body.email
        });
    }else if( req.path == '/messages'){
        dbinsSelect = new OrderEmail({

            to: req.body.to,
            from: req.body.from,
            messageSubject: req.body.messageSubject,
            messageBody: req.body.messageBody,
            drugs: {
                name: req.body.name,
                requireDate:req.body.requireDate
            },

        });
    }else if( req.path == '/delivers' ){

        dbinsSelect = new Deliver({
            deliveredId: req.body.deliveredId,
            requestId: req.body.requestId,
            orderId: req.body.orderId,
            vendor: req.body.vendor,
            quantity: req.body.quantity,
            status: req.body.status
        });

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
    }else if( req.path == '/' ){
        dbSelect = Order;
    }

    dbSelect.find(function (err, Order) {
        if (err) return console.error(err);
       // console.log(Order);
        res.send(Order);
    });
}

function update(req, res, next){
    //const user = req.user;
//     // user.status = req.body.status;
    console.log('updating');
    res.send('update');
    // user.save()
    //     .then(savedUser => res.json(savedUser))
    //     .catch(e => next(e));
//     console.log('updating');
}

function load(req, res, next, id) {
    console.log('param ->' + id)
    // Order.get(id)
    //     .then((user) => {
    //         req.user = user; // eslint-disable-line no-param-reassign
    //         return next();
    //     })
    //     .catch(e => next(e));
}



module.exports = {insert, list, update, load};
