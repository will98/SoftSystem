const Router = require('express').Router()
const tesis = require('../controllers/tesis')

Router.post("/crear", tesis.crear)

module.exports = Router