const express = require('express');
const request = require('../controller/request_controller');

const router = express.Router();

router.route('/')
    .post(request.insert)

    .get(request.list);

router.route('/:id')
    .put(request.update);

router.param('id', request.load);

module.exports = router;