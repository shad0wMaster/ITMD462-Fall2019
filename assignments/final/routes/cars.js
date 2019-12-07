var express = require('express');
var router = express.Router();
var crud = require('../code/car_crud');
/* cars list */
router.get('/', function (req, res, next) {
    crud.getAll(function (cars, err) {
        if (err !== null) {
            res.render('error', {error: err});
        } else {
            if (req.session.alert) {
                res.render('cars', {cars: cars, hasAlert: true, alert: req.session.alert});
                req.session.alert = false;
            } else {
                res.render('cars', {cars: cars});
            }
        }
    });
});
router.get('/:id', function (req, res) {
    var id = req.params.id;
    crud.getOne(id, function (car, err) {
        if (err !== null) {
            res.render('error', {error: err});
        }
        else {
            res.render('edit', {car: car});
        }
    })
});

module.exports = router;
