/**
 * Created by MYPC on 7/1/2017.
 */
const dispense = require('../models/prescription/dispensePrescript');
const doctor = require('../models/prescription/doctor');
const medic = require('../models/prescription/medicine');
const display = require('../models/prescription/ShowPrescriptModel');


function insert(req, res){
    console.log("i am here");
    var dbSelect = {};

    if( req.path == '/doctor'){

      var  dbSelect = new doctor(req.body);

    }else if( req.path == '/medicine'){
        dbSelect = new medic({
            name: req.body.name,
            dosage: req.body.dosage,
            frequency: req.body.frequency,
            period: req.body.period,
            quantity: req.body.quantity,
        });

    }/*else if( req.path == '/display'){
        dbSelect = new display({

            PrescriptionID: req.body.PrescriptionID,
            CreateDate: req.body.CreateDate,
            PrescriptionDate: req.body.PrescriptionDate,
            messageBody: req.body.messageBody

        });
    }*/

     dbSelect.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));

}



function GetDateID(req,res) {
    doctor.find({id : req.params.id}).then(function (values) {
        console.log(values);
        res.send(values);
    }).catch(function (err) {
        console.log(err);
    });

}

function list(req, res){

    var dbdDataSelect = 'fail';

    if( req.path == '/dispense'){
        dbdDataSelect = dispense;
    }/*
    else if( req.path == '/doctor'){
        dbdDataSelect = doctor;
    }*/
    else if( req.path == '/medicine'){
        dbdDataSelect = medic;
    }

    dbdDataSelect.find(function (err, Prescription) {
        if (err) return console.error(err);
        // console.log(Order);
        res.send(Prescription);
    });
}

module.exports = {insert, list,GetDateID};