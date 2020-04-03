const {Router} = require('express')
const CarController = require('./controllers/CarController')

const routes = Router()

routes.post('/car', CarController.create)

module.exports = routes