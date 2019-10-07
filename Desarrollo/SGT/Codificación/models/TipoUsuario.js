const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const helpers = require('../helpers');

const TipoUsuario = new Schema({
    _id: { type: Number, default: 0, index: true },
    nombre: String
}, {autoIndex: false})

TipoUsuario.pre('save', async function (next) {
    if (this._id == 0) {
        const counter = await helpers.getCounterByModel('tipo_usuario')
        this._id = counter.seq;
    }
    return next();
})

module.exports = mongoose.model('TipoUsuario', TipoUsuario);