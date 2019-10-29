const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const helpers = require('../helpers');

const Autor = new Schema({
    _id: { type: Number, default: 0, index: true },
    nombre: String
}, {autoIndex: false})

Autor.pre('save', async function (next) {
    if (this._id == 0) {
        const counter = await helpers.getCounterByModel('autor')
        this._id = counter.seq;
    }
    return next();
})

module.exports = mongoose.model('Autor', Autor);