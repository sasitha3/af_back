const express = require('express');
const requestCon = require('../controller/stock_controller');



const router = express.Router();

router.route('/')
    .post(requestCon.insert)

    .get(requestCon.list);

router.route('/batch')
    .post(requestCon.addBatch);

module.exports = router;