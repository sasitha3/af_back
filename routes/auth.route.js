const express = require('express');
const auth = require('../controller/auth.controller');
const router = express.Router();
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

router.route('/')
    .post(auth.login);

module.exports = router;