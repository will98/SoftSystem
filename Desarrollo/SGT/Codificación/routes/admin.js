const Router = require('express').Router()
const controller = require('../controllers/admin')

Router.get("/homeadmin", controller.homeadmin)

module.exports = Router