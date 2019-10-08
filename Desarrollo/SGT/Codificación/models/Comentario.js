const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const helpers = require('../helpers');

const Comentario = new Schema({
    _id: { type: Number, default: 0, index: true },
    usuario: {type: Number, ref: "Usuario"},
    texto: String
}, {autoIndex: false})

Comentario.pre('save', async function (next) {
    if (this._id == 0) {
        const counter = await helpers.getCounterByModel('comentario')
        this._id = counter.seq;
    }
    return next();
})

module.exports = mongoose.model('Comentario', Comentario);