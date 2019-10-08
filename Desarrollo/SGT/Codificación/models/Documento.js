const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const helpers = require('../helpers');

const Documento = new Schema({
    _id: { type: Number, default: 0, index: true },
    titulo: String,
    tipo: {type: Number, ref: "Tipo"},
    resumen: String,
    fecha: Number,
    URL_archivo: String,
    grado: String,
    cita: String,
    URI: String,
    descripcion: String,
    disciplina: String,
    numero_vistas: Number,
    tipo_documento: {type: Number, ref: "TipoDocumento"}
}, {autoIndex: false})

Documento.pre('save', async function (next) {
    if (this._id == 0) {
        const counter = await helpers.getCounterByModel('documento')
        this._id = counter.seq;
    }
    return next();
})

module.exports = mongoose.model('Documento', Documento);