const Router = require('express').Router()
const controller = require('../controllers')


Router.get("/", controller.test)
Router.get("/comunidad_coleccion", controller.comunidad_coleccion)

Router.get("/home", controller.home)

module.exports = Router