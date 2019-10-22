const Router = require('express').Router()
const controller = require('../controllers')


Router.get("/", controller.test)
Router.get("/asesor", controller.asesor)
Router.get("/comunidad_coleccion", controller.comunidad_coleccion)
Router.get("/facultad", controller.facultad)
Router.get("/grado_academico", controller.grado_academico)
Router.get("/palabra_clave", controller.palabra_clave)
Router.get("/home", controller.home)
Router.get("/buscar", controller.buscar)

module.exports = Router