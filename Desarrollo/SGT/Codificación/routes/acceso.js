const Router = require('express').Router()
const acceso = require('../controllers/acceso')

Router.get("/", acceso.getLogin)
Router.post("/", acceso.postLogin)
Router.get("/registro", acceso.getRegistro)
Router.post("/registro", acceso.postRegistro)
Router.get("/olvido", acceso.getOlvido)
Router.post("/olvido", acceso.postOlvido)
Router.get("/logout", acceso.logout)

module.exports = Router