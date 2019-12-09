const Router = require('express').Router()
const buscador = require('../controllers/buscador')

Router.get("/", buscador.buscar)
console.log('2.- buscador.buscar')
Router.get("/buscar", buscador.buscar)
Router.get("/asesor", buscador.asesor)
Router.get("/comunidades_coleccion", buscador.comunidades_coleccion)
Router.get("/comunidad", buscador.comunidad)
Router.get("/facultad", buscador.facultad)
Router.get("/grado_academico", buscador.grado_academico)
Router.get("/palabra_clave", buscador.palabra_clave)
Router.get("/busqueda_avanzada", buscador.buqueda_avanzada)
Router.get("/mas_visitadas", buscador.mas_visitadas)
Router.get("/rango_anios", buscador.rango_anios)

Router.get("/comunidadadmin", buscador.comunidadadmin)


module.exports = Router