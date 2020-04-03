const {Router} = require('express')
const CarController = require('./controllers/CarController')
const {Segments, Joi, celebrate} = require('celebrate')

const routes = Router()
routes.post('/car', celebrate({
    [Segments.BODY]: Joi.object().keys({
        board: Joi.string().required(),
        password_hash: Joi.string().required()
    })
}) ,CarController.create)

module.exports = routes