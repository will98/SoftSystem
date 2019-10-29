const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const helpers = require('../helpers');

const Facultad = new Schema({
    _id: { type: Number, default: 0, index: true },
    nombre: String,
    area_academica: {type: Number, ref: "AreaAcademica"}
}, {autoIndex: false})

Facultad.pre('save', async function (next) {
    if (this._id == 0) {
        const counter = await helpers.getCounterByModel('facultad')
        this._id = counter.seq;
    }
    return next();
})

module.exports = mongoose.model('Facultad', Facultad);