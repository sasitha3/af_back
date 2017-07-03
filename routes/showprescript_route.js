const express = require('express');
const display = require('../controller/prescript_controller');

const router = express.Router();

router.route('/')
    .get(display.list);

module.exports = router;


