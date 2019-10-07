const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentarioDocumento = new Schema({
    comentario: {type: Number, ref: "Comentario"},
    documento: {type: Number, ref: "Documento"},
}, {autoIndex: false})


module.exports = mongoose.model('ComentarioDocumento', ComentarioDocumento);