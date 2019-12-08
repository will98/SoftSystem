const Router = require('express').Router()
const controller = require('../controllers/usuario')

Router.get("/", controller.home)

module.exports = Router