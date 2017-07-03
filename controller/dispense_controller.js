const dispense = require('../models/prescription/dispensePrescript');

/*function insert(req, res){
    const display = new dispense({
        drugname: req.body.drugname

    });

    display.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}*/

function list(req, res){
    dispense.find(function (err, dispense) {
        if (err) return console.error(err);
       // console.log(Order);
        res.send(dispense);
    });
}

module.exports = {list}
