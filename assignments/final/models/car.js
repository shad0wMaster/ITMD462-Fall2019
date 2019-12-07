const mongoose = require('mongoose');

mongoose.promise = global.Promise;

const carSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
    },

    color: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Car', carSchema);