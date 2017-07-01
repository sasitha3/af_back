const express = require('express');
const router = express.Router();

const order = require('./order_route');
const doctor = require('./doctor_route');
const medicine = require('./medicine_route');
const display = require('./showprescript_route');
const dispense = require('./dispenseprescript_route');


//your routers
router.use('/orders', order);
router.use('/doctor', doctor);
router.use('/medicine', medicine);
router.use('/display', display);
router.use('/dispense', dispense);

module.exports = router;

