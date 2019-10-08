const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const helpers = require('../helpers');

const Tipo = new Schema({
    _id: { type: Number, default: 0, index: true },
    nombre: String,
    escuela_profesional: {type: Number, ref: "EscuelaProfesional"}
}, {autoIndex: false})

Tipo.pre('save', async function (next) {
    if (this._id == 0) {
        const counter = await helpers.getCounterByModel('tipo')
        this._id = counter.seq;
    }
    return next();
})

module.exports = mongoose.model('Tipo', Tipo);