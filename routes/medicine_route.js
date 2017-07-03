const express = require('express');
const medicine = require('../controller/medicine_controller');

const router = express.Router();

router.route('/')
    .post(medicine.insert)

    .get(medicine.list)

    module.exports = router;


