const LocalStrategy = require('passport-local').Strategy
const passport = require('passport');

const Usuario = require('../models/Usuario')

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  const data = id;
  done(null, data);
});
/**
 * Sign in using Email and Password.
 */
passport.use('local-login', new LocalStrategy({ usernameField: 'correo', passwordField: 'contrasena', passReqToCallback: true }, async (req, correo, contrasena, done) => {
  try {
    const usuario = await Usuario.findOne({ correo: correo.toLowerCase() });
    if (!usuario) {
      return done(null, false, { msg: 'El email no ha sido encontrado.' });
    }
    const match = await usuario.comparePassword(contrasena);
    if (match) {
      return done(null, usuario);
    }
    return done(null, false, { msg: 'Contraseña incorrecta.' });
  } catch (err) {
    return done(err);
  }
}));  