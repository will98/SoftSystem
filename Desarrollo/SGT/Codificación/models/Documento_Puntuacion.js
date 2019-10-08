const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentoPuntuacion = new Schema({
    usuario: {type: Number, ref: "Usuario"},
    documento: {type: Number, ref: "Documento"},
}, {autoIndex: false})


module.exports = mongoose.model('DocumentoPuntuacion', DocumentoPuntuacion);