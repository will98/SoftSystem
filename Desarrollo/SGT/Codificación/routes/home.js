const Router = require('express').Router()
const home = require('../controllers/home')

Router.get("/", home.test)

module.exports = Router