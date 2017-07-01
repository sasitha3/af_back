const Presc = require('../models/prescription/ShowPrescriptModel');

function insert(req, res){
    const prescribe = new Presc({
        PrescriptionID: req.body.PrescriptionID

    });

    prescribe.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}
function list(req, res){
    Presc.find(function (err, Presc) {
        if (err) return console.error(err);
       // console.log(Order);
        res.send(Presc);
    });
}
module.exports = {insert: list }