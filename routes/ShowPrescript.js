const express = require('express');
var showdetails = require('../models/prescription/ShowPrescriptModel');

const router = express.Router();



// router.get('/GetShowDetails', (req, res) => {
//     showdetails.find().exec().then(response => {
//     res.json(response );
//     }).catch(err => {
//         console.error(err);
//         res.sendStatus(500);
//     });
// });

router.get('/ShowDetails', (req, res) => {
    showdetails.find().exec().then(response => {
        res.json(response);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = router;