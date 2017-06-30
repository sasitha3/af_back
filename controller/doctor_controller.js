const doc = require('../models/prescription/doctor');

function insert(req, res){
    const details = new doc({
        PrescriptionID: req.body.PrescriptionID

    });

    details.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}
function list(req, res){
    doc.find(function (err, doc) {
        if (err) return console.error(err);
       // console.log(Order);
        res.send(doc);
    });
}
module.exports = {insert: list }