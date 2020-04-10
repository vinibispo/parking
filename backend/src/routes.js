const {Router} = require('express')
const CarController = require('./controllers/CarController')
const ParkingController = require('./controllers/ParkingController')
const AdminController = require('./controllers/AdminController')
const SaidaController = require('./controllers/SaidaController')
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
	})
}), CarController.login)
routes.post('/parking', celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		price_per_hour: Joi.number(),
		total_money: Joi.number()
	})
}),ParkingController.create)
routes.post('/pay', CarController.pay)
routes.post('/request', CarController.request)

routes.get('/admin', AdminController.index)
routes.post('/admin', celebrate({
	[Segments.BODY]:{
		name: Joi.string().required(),
		email: Joi.string().required(),
		pass: Joi.string().required()
	}
}), AdminController.create)
routes.post('/admin/login', celebrate({
	[Segments.BODY]:{
		email: Joi.string().required(),
		pass: Joi.string().required()
	}
}),AdminController.login)
routes.put('/admin/:id', celebrate({
	[Segments.BODY]:{
		name: Joi.string(),
		email: Joi.string(),
		pass: Joi.string()
	},
	[Segments.PARAMS]:{
		id: Joi.number().required()
	}
}),AdminController.update)
routes.delete('/admin/:id', celebrate({
	[Segments.PARAMS]:{
		id: Joi.number().required()
	}
}),AdminController.remove)


routes.get('/saidas', SaidaController.index)
routes.get('/saidas/:id', SaidaController.one)
routes.post('/saidas', SaidaController.create)
routes.put('/saidas/:id', SaidaController.update)
routes.delete('/saidas/:id', SaidaController.remove)
routes.get('/entradaesaida', SaidaController.entradaesaida)
module.exports = routes
