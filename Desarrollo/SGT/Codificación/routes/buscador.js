const Router = require('express').Router()
const buscador = require('../controllers/buscador')

Router.get("/", buscador.buscar)
Router.get("/asesor", buscador.asesor)
Router.get("/comunidad_coleccion", buscador.comunidad_coleccion)
Router.get("/facultad", buscador.facultad)
Router.get("/grado_academico", buscador.grado_academico)
Router.get("/palabra_clave", buscador.palabra_clave)
Router.get("/buqueda_avanzada", buscador.buqueda_avanzada)
Router.get("/mas_visitadas", buscador.mas_visitadas)
Router.get("/rango_anios", buscador.rango_anios)

module.exports = Router