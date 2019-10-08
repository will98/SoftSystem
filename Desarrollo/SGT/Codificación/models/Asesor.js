const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const helpers = require('../helpers');

const Asesor = new Schema({
    _id: { type: Number, default: 0, index: true },
    nombre: String
}, {autoIndex: false})

Asesor.pre('save', async function (next) {
    if (this._id == 0) {
        const counter = await helpers.getCounterByModel('asesor')
        this._id = counter.seq;
    }
    return next();
})

module.exports = mongoose.model('Asesor', Asesor);