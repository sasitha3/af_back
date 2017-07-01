var express = require('express');
var router = express();
var mongoose = require('mongoose');



//importing the modelschema under variable drugdetails
const drugdetails = require('../models/Drugmanage/DrugData');



//sending drug details to the database
function SendData(req,res) {
    var user = new drugdetails(req.body);
    console.log(user);
    user.save().then(function (user) {
        res.send(user);
    }).catch(function (err) {
        console.log(err);
    });
}


// router.get('/GetDrugDetails',insert);

//deleting data from database
function DeleteData(req,res) {
    console.log("i came here");
    console.log(req.param.id);
    drugdetails.remove({_id: req.params.id}).then(function (responce) {
        res.send(responce);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
}



//getting drugDetails from the database
function EditData(req,res) {
    drugdetails.find({_id: req.params.id}).then(function (values) {
        console.log(values);
        res.send(values);
    }).catch(function (err) {
        console.log(err);
    });
}

//getting drugDetails from the database
function GetData(req, res) {

    drugdetails.find().then(function (values) {
        console.log(values);
        res.send(values);
    }).catch(function (err) {
        console.log(err);
    });

}


module.exports = {GetData,SendData,EditData,DeleteData};


