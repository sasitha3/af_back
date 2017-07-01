/**
 * Created by sacheen on 7/1/2017.
 */
const express = require('express');
const DrugData = require('../controller/drugmanage');

const router = express.Router();


router.route('/GetDrugDetails')
    .get(DrugData.GetData);

router.route('/PostDrugDetails')
    .post(DrugData.SendData);

router.route('/EditDrugDetails/:id')
    .get(DrugData.EditData);

router.route('/DeleteDrugDetails/:id')
    .delete(DrugData.DeleteData);

module.exports = router;