const express = require('express');
const router = express.Router();

const order = require('./order_route');

//your routers
router.use('/orders', order);

module.exports = router;

