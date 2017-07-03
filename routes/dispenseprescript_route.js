const express = require('express');
const dispense = require('../controller/dispense_controller');

const router = express.Router();

router.route('/')
    .get(dispense.list);

module.exports = router;


