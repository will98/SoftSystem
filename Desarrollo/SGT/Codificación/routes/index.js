const Router = require('express').Router()
const controller = require('../controllers')

const home = require('../routes/home')
const acceso = require('../routes/acceso')
const admin = require('../routes/admin')
const buscador = require('../routes/buscador')
const tesis = require('../routes/tesis')

Router.use("/home", home)
Router.use("/acceso", acceso)
Router.use("/admin", admin)
Router.use("/buscador", buscador)
Router.use("/tesis", tesis)

Router.get("/", controller.home)

Router.get("/asesor", controller.asesor)
Router.get("/comunidad_coleccion", controller.comunidad_coleccion)
Router.get("/facultad", controller.facultad)
Router.get("/grado_academico", controller.grado_academico)
Router.get("/palabra_clave", controller.palabra_clave)
Router.get("/home", controller.home)
Router.get("/buscar", controller.buscar)
Router.get("/busqueda_avanzada", controller.busqueda_avanzada)
Router.get("/mas_visitadas", controller.mas_visitadas)
Router.get("/rango_anios", controller.rango_anios)
Router.get("/comunidades", controller.comunidades)
Router.get("/comunidad", controller.comunidad)
Router.get("/login",controller.login) 

Router.get("/homeadmin",controller.homeadmin)

module.exports = Router