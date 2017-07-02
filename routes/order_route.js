const express = require('express');
const order = require('../controller/order_controller');
//const email = require('../controller/email_controller');

const router = express.Router();
//const od = 'order';


router.route('/:id')

    .put(order.update);

router.route('/request')

    .post(order.insert)

    .get(order.list);

router.route('/request/:id')

    .put(order.update);

router.route('/delivers')

    .post(order.insert)

    .get(order.list);

router.route('/delivers/:id')

    .put(order.update);


router.route('/rejects')

    .post(order.insert)

    .get(order.list);

router.route('/rejects/:id')

    .put(order.update);


    router.route('/vendors')

    .get(order.list)
     .post(order.insert);

router.route('/messages')

    .post(order.insert);

// router.route('/email').post(email.transporter);
router.param('id', order.load);

module.exports = router;
