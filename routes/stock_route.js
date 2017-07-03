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

router.route('/requestManage/:id')
    .post(requestCon.updateRequest);

// router.route('/confirmRecieval')
//     .get(requestCon.showconfirmedRequests);

router.route('/reports')
    .get(requestCon.drugTableLoad);

router.route('/reports/:id')
    .delete(requestCon.deleteRequest);



router.route('/:id')
    .put(request.update);

router.param('id', request.load);

module.exports = router;