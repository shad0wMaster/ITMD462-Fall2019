var mongoose = require('mongoose');
var Car = require('../models/car');
var express = require('express');
var router = express.Router();
var crud = require('../code/car_crud');

router.post('/', function (req, res) {
    crud.create(req.body, (result, err) => {
        if (err !== null) {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        } else {
            req.session.alert = 'New car with id ' + result._id + " created!";
            res.redirect('/cars');
            /*return res.status(201).json({
                success: true,
                message: 'New car created successfully',
                car: result
            });*/
        }
    });
});
router.get('/', function (req, res) {
    crud.getAll(function (result, err) {
        if (err !== null) {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        } else {
            return res.status(201).json({
                success: true,
                message: 'gottem',
                cars: result
            });
        }
    });
});
router.get('/:id', function (req, res) {
    crud.getOne(req.params.id, function (result, err) {
        if (err !== null) {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            })
        } else {
            res.status(201).json({
                success: true,
                message: 'gottem',
                car: result
            });
        }
    });
});
router.post('/delete', function (req, res) {
    var id = req.body.id;
    crud.delete(id, function (result, err) {
        if (err !== null) {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        } else {
            /*res.status(201).json({
                success: true,
                message: 'gottem',
                car: result
            });*/
            req.session.alert = 'Delete successful!';
            res.redirect('/cars');
        }
    });
});
router.post('/update', function (req, res) {
    var id = req.body.id;
    crud.update(id, req.body, function (result, err) {
        if (err !== null) {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        } else {
            req.session.alert = 'Update successful!';
            res.redirect('/cars');
        }
    });
});
module.exports = router;