const passport = require('passport')

const AppError = require('../helpers/AppError')

const Usuario = require('../models/Usuario')
const TipoUsuario = require('../models/TipoUsuario')

exports.getLogin = async (req, res, next) => {
    res.send("Vista de inicio de sesión");
}

exports.postLogin = (req, res, next) => {
    passport.authenticate('local-login', async (err, user, info) => {
        try {
          if (err) {
            return next(new AppError(error, `/acceso`));
          }
          if (!user) {
            return res.send(info);
          }
          req.logIn(user, (err) => {
            if (err) { return next(new AppError(error, `/acceso`));}
            return res.send(user);
          });
        } catch (error) {
          return next(new AppError(error, `/acceso`));
        }
      })(req, res, next);
}

exports.getRegistro = (req, res, next) => {
    res.send("Vista de inicio de registro");
}

exports.postRegistro = async (req, res, next) => {
    try {

        let {
            nombres, apellidos, correo, contrasena, confirmarContrasena
          } = req.body;

          correo = correo.trim().toLowerCase()
          
          if (contrasena != confirmarContrasena) throw new Error('Las contraseñas no coinciden')
          const existingUser = await Usuario.findOne({ correo })
          if (existingUser) throw new Error("Ya existe un usuario registrado con ese correo.")

          const tipoUsuario = await TipoUsuario.findOne({"nombre": "Usuario"})
          
          if (!tipoUsuario) throw new Error("No existe el tipo de usuario.")

          const newUser = new Usuario({
            nombres, apellidos, correo, contrasena, tipoUsuario: tipoUsuario._id
          });

          await newUser.save();

          req.logIn(newUser, (err) => {
            if (err) return next(err);
                return res.send(newUser)
          });

    } catch (error) {
        return next(new AppError(error, `/acceso/registro`));
    }
}