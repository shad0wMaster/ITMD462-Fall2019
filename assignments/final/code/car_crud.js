var mongoose = require('mongoose');
var Car = require('../models/car');
module.exports = {
    create: function (model, cb) {
        var cah = new Car({
            _id: mongoose.Types.ObjectId(),
            make: model.make,
            model: model.model,
            year: model.year,
            color: model.color
        });
        cah.save()
            .then((car) => {
                cb(car, null);
            })
            .catch((err) => {
                cb(null, err);
            });
    },
    getAll: function (cb) {
        Car.find()
            .then(cars => {
                cb(cars, null);
            })
            .catch(err => {
                cb(null, err);
            });
    },
    getOne: function (id, cb) {
        Car.findById(id)
            .then(car => {
                cb(car, null);
            })
            .catch((err) => {
                cb(null, err);
            });
    },
    delete: function (id, cb) {
        Car.findByIdAndRemove(id)
            .exec()
            .then(() => {
                cb(true, null);
            })
            .catch((err) => {
                cb(null, err);
            });
    },
    update: function (id, newModel, cb) {
        Car.update({_id: id}, {$set: newModel})
            .exec()
            .then(() => {
                cb(newModel, null);
            })
            .catch((err) => {
                cb(null, err);
            });
    }
};