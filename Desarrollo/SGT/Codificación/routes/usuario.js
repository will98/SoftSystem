const Router = require('express').Router()
const controller = require('../controllers/usuario')

Router.get("/", controller.home)
Router.get("/editar", controller.getEditar)
Router.post("/editar", controller.getEditar)
Router.get("/favorito", controller.getTesisFavorita)
Router.get("/recomendado", controller.getTesisRecomendado)
Router.get("/noticias", controller.getVisualizarNoticias)

module.exports = Router