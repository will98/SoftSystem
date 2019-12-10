const Router = require('express').Router()
const home = require('../controllers/home')

Router.get("/", home.home)

module.exports = Router