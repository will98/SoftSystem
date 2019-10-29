const Router = require('express').Router()
const buscador = require('../controllers/buscador')

Router.get("/todos", buscador.findAll)

module.exports = Router