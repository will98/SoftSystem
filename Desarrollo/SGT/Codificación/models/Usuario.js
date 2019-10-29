const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const helpers = require('../helpers');

const Usuario = new Schema({
    _id: { type: Number, default: 0, index: true },
    nombres: String,
    apellidos: String,
    correo: String,
    contrasena: String,
    tipoUsuario: {type: Number, href: "TipoUsuario"}
}, {autoIndex: false})

const genSalt = (round) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(round, (err, salt) => {
        if(err) return reject(err);
        return resolve(salt);
      })
    })
  }
  
  const hash = (wordToHash, salt) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(wordToHash, salt, (err, hashed) => {
        if(err) return reject(err);
        return resolve(hashed);
      })
    })
  }

  Usuario.pre('save', async function(next) {
    const usuario = this;
    if(this._id == 0){
      const counter = await helpers.getCounterByModel('usuario')
      this._id = counter.seq;
    }
    if (usuario.isModified('contrasena')) { 
      const salt = await genSalt(10);
      usuario.contrasena = await hash(usuario.contrasena, salt);
    }
    return next();
  })
  
  Usuario.methods.comparePassword = function (candidatePassword) {
    const pssw = this.contrasena;
    return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, pssw, (err, isMatch) => {
        if(err) return reject(err);
        return resolve(isMatch);
      });
    })
  };

module.exports = mongoose.model('Usuario', Usuario);