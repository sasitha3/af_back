var express = require('express');
var router = express();
var mongoose = require('mongoose');



//importing the modelschema under variable drugdetails
const drugdetails = require('../models/Drugmanage/DrugData');
const catdetails = require('../models/Drugmanage/CategoryData');
const typdetails = require('../models/Drugmanage/DrugType');
const Unittypdetails = require('../models/Drugmanage/DrugUnitType');
const VendorD = require('../models/Drugmanage/VendorData');



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
function GetData(req,res) {

    drugdetails.find().then(function (values) {
        console.log(values);
        res.send(values);
    }).catch(function (err) {
        console.log(err);
    });

}

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



//sending catdetails to database
function SendCatData(req,res,next) {
    var cat = new catdetails(req.body);
    console.log(cat);
    cat.save().then(function (user) {
        res.send(user);
    }).catch(function (err) {
        console.log(err);
    });
}

function DeleteCatData(req,res) {
    console.log(req.param.id);
    catdetails.remove({_id: req.params.id}).then(function (responce) {
        res.send(responce);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
}

//sending DrugTypedetails to database
function PostTypeData(req, res) {
    console.log(req.body);
    var typ = new typdetails(req.body);
    console.log(typ);
    typ.save().then(function (user) {
        res.send(user);
    }).catch(function (err) {
        console.log(err);
    });
}



//deleting categoryTypedata from database
function DeleteType(req,res) {
    console.log(req.param.id);
    typdetails.remove({_id: req.params.id}).then(function (responce) {
        res.send(responce);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
}



//getting TypedrugDetails from the database

function  GetType(req,res) {
    typdetails.find().then(function (values) {
        console.log(values);
        res.send(values);
    }).catch(function (err) {
        console.log(err);
    });
}

//drugUnittype backend below

//sending UnitTypedetails to database
function SentUnitType(req,res) {
    console.log(req.body);
    var unityp = new Unittypdetails(req.body);
    console.log(unityp);
    unityp.save().then(function (user) {
        res.send(user);
    }).catch(function (err) {
        console.log(err);
    });
}

//deleting UnitTypedata from database
function DeleteUnitType(req,res) {
    console.log(req.param.id);
    Unittypdetails.remove({_id: req.params.id}).then(function (responce) {
        res.send(responce);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
}



//getting UnitTypeDetails from the database
function GetUnitType(req,res) {
    Unittypdetails.find().then(function (values) {
        console.log(values);
        res.send(values);
    }).catch(function (err) {
        console.log(err);
    });
}

//Vendorbackend below

//sending VEndor to database
function SendVendor(req,res) {
    console.log(req.body);
    var vend = new VendorD(req.body);
    console.log(vend);
    vend.save().then(function (user) {
        res.send(user);
    }).catch(function (err) {
        console.log(err);
    });
}


//deleting VEndor from database
function DeleteVendor(req,res) {
    console.log(req.param.id);
    VendorD.remove({_id: req.params.id}).then(function (responce) {
        res.send(responce);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
}


//getting Vendor from the database
function GetVendor(req,res) {
    VendorD.find().then(function (values) {
        console.log(values);
        res.send(values);
    }).catch(function (err) {
        console.log(err);
    });
}









module.exports = {GetVendor,GetData,SendData,EditData,DeleteData,SendCatData,DeleteCatData,PostTypeData,DeleteType,GetType,SentUnitType,DeleteUnitType,GetUnitType,SendVendor,DeleteVendor};


