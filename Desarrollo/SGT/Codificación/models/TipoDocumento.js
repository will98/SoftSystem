const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const helpers = require('../helpers');

const TipoDocumento = new Schema({
    _id: { type: Number, default: 0, index: true },
    nombre: String
}, {autoIndex: false})

TipoDocumento.pre('save', async function (next) {
    if (this._id == 0) {
        const counter = await helpers.getCounterByModel('tipo_documento')
        this._id = counter.seq;
    }
    return next();
})

module.exports = mongoose.model('TipoDocumento', TipoDocumento);