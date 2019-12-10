const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const helpers = require('../helpers');

const EscuelaProfesional = new Schema({
    _id: { type: Number, default: 0, index: true },
    nombre: String,
    facultad: {type: Number, ref: "Facultad"}
}, {autoIndex: false})

EscuelaProfesional.pre('save', async function (next) {
    if (this._id == 0) {
        const counter = await helpers.getCounterByModel('escuela_profesional')
        this._id = counter.seq;
    }
    return next();
})

module.exports = mongoose.model('EscuelaProfesional', EscuelaProfesional);