const Order = require('../models/orders/order');

function insert(req, res){
    const order = new Order({
        name: req.body.name

    });

    order.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}

function list(req, res){
    Order.find(function (err, Order) {
        if (err) return console.error(err);
       // console.log(Order);
        res.send(Order);
    });
}

module.exports = {insert, list}
