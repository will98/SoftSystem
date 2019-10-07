const mongoose = require('mongoose');

const Contador = new mongoose.Schema({
  _id: { type: String, index: true },
  seq: { type: Number, default: 1 }
}, { autoIndex: false })

module.exports = mongoose.model('Contador', Contador);