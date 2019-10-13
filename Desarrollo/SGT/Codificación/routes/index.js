const Router = require('express').Router()
const controller = require('../controllers')


Router.get("/", controller.test)
Router.get("/comunidad_coleccion", controller.comunidad_coleccion)
Router.get("/palabra_clave", controller.palabra_clave)

module.exports = Router