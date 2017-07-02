const express = require('express');
const router = express.Router();

const order = require('./order_route');
const prescription = require('./prescription_route');


//your routers
router.use('/orders', order);
router.use('/prescription', prescription);

module.exports = router;

