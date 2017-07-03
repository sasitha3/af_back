/**
 * Created by MYPC on 7/1/2017.
 */
const express = require('express');
const prescript = require('../controller/prescription_controller');

const router = express.Router();
//const od = 'order';

router.route('/doctor')

    .post(prescript.insert);

router.route('/medicine')

    .post(prescript.insert)

    .get(prescript.list);

router.route('/display')

    .get(prescript.list);

router.route('/dispense')

    .get(prescript.list);

router.route('/GetDateDetails/:id')
    .get(prescript.GetDateID);

//Srouter.param('id', order.load);

module.exports = router;