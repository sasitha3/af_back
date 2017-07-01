const medic = require('../models/prescription/medicine');

function insert(req, res){
    const drug = new medic({
        drugname: req.body.drugname

    });

    drug.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}

function list(req, res){
    medic.find(function (err, medic) {
        if (err) return console.error(err);
       // console.log(Order);
        res.send(medic);
    });
}
module.exports = {insert, list }