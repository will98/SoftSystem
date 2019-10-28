const Router = require('express').Router()
const controller = require('../controllers')
const acceso = require('../routes/acceso')

Router.get("/", controller.test)
Router.use("/acceso", acceso)


module.exports = Router