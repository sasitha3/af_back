const express = require('express');
const user = require('../controller/user.controller');
const router = express.Router();


router.route('/')
    .post(user.insertUser)

    .get(user.findUser);
	
module.exports = router;


