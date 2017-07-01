const express = require('express');
const request = require('../controller/request_controller');

const router = express.Router();

router.route('/')
    .post(request.insert)

    .get(request.list);

module.exports = router;