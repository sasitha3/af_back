const express = require('express');
const router = express.Router();

const order = require('./order_route');
const prescription = require('./ShowPrescript');
const  DrugData=require('./DrugDataManage');
const stock = require('./stock_route');

//your routers
router.use('/orders', order);
router.use('/prescription', prescription);
router.use('/DrugData',DrugData);
router.use('/stock',stock);
module.exports = router;

