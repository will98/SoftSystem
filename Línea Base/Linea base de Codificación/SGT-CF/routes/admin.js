const Router = require('express').Router()
const controller = require('../controllers/admin')

Router.get("/homeadmin",controller.homeadmin)
Router.get("/admin/tesis", controller.tesis)
Router.get("/loginadmin", controller.loginadmin)


module.exports = Router