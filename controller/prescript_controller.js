const display = require('../models/prescription/ShowPrescriptModel');

/*function insert(req, res){
    const prescribe = new Presc({
        PrescriptionID: req.body.PrescriptionID

    });

    prescribe.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}*/
function list(req, res){
    display.find(function (err, display) {
        if (err) return console.error(err);
       // console.log(Order);
        res.send(display);
    });
}
module.exports = {list}
