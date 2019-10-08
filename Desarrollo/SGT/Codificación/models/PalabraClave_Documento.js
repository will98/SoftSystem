const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PalabraClaveDocumento = new Schema({
    palabra_clave: {type: Number, ref: "PalabraClave"},
    documento: {type: Number, ref: "Documento"},
}, {autoIndex: false})


module.exports = mongoose.model('PalabraClaveDocumento', PalabraClaveDocumento);