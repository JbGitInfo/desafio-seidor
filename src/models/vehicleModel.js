'use strict';

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const schema = new mongoose.Schema({
    id: Number,
    placa: String,
    cor: String,
    marca: String,
    user: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    }
});

autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, {
    model: 'Vehicle',
    field: 'id',
    startAt: 1
});

const model = mongoose.model('Vehicle', schema);

module.exports = model;


