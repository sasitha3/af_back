const express = require('express');
const requestCon = require('../controller/stock_controller');



const router = express.Router();

router.route('/')
    .post(requestCon.insert)

    .get(requestCon.list);

router.route('/batch')
    .post(requestCon.addBatch);

router.route('/requestManage')
    .get(requestCon.viewRequests);

router.route('/reports')
    .get(requestCon.drugTableLoad);

router.route('/reports/:id')
    .get(requestCon.deleteRequest);

module.exports = router;