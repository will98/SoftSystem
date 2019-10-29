const Router = require('express').Router()
const acceso = require('../controllers/acceso')

Router.get("/", acceso.getLogin)
Router.post("/", acceso.postLogin)
Router.get("/registro", acceso.getRegistro)
Router.post("/registro", acceso.postRegistro)

module.exports = Router