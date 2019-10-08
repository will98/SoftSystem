const Router = require('express').Router()
const controller = require('../controllers')


Router.get("/", controller.test)

module.exports = Router