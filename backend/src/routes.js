const {Router} = require('express')
const CarController = require('./controllers/CarController')
const {Segments, Joi, celebrate} = require('celebrate')

const routes = Router()
routes.post('/car', celebrate({
    [Segments.BODY]: Joi.object().keys({
        board: Joi.string().required(),
        password: Joi.string().required()
    })
}) ,CarController.create)
routes.post('/car/login', celebrate({
    [Segments.BODY]: Joi.object().keys({
        board: Joi.string().required(),
        password: Joi.string().required()
    }),
    [Segments.HEADERS]: Joi.object({
        token: Joi.string().required()
    }).unknown()
}),CarController.auth, CarController.login)

module.exports = routes