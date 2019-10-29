const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AsesorDocumento = new Schema({
    asesor: {type: Number, ref: "Asesor"},
    documento: {type: Number, ref: "Documento"},
}, {autoIndex: false})


module.exports = mongoose.model('AsesorDocumento', AsesorDocumento);