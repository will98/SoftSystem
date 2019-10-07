const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutorDocumento = new Schema({
    autor: {type: Number, ref: "Autor"},
    documento: {type: Number, ref: "Documento"},
}, {autoIndex: false})


module.exports = mongoose.model('AutorDocumento', AutorDocumento);