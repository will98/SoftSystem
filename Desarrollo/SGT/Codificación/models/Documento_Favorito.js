const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentoFavorito = new Schema({
    usuario: {type: Number, ref: "Usuario"},
    documento: {type: Number, ref: "Documento"},
}, {autoIndex: false})


module.exports = mongoose.model('DocumentoFavorito', DocumentoFavorito);