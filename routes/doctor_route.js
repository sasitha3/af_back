const express = require('express');
const details = require('../controller/doctor_controller');

const router = express.Router();

router.route('/')
    .post(details.insert)

    module.exports = router;


