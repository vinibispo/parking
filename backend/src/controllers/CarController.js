const {Car} = require('../models')
const jwt = require('jsonwebtoken')
module.exports = {
	create: async (req, res)=>{
		const {board, password} = req.body
		const car = await Car.create({board, password})
		return res.status(201).json({
			car,
			token: car.generateToken()
		})
	},
	login: async (req, res)=>{
		const {board, password} = req.body
		const id = req.userId
		const car = await Car.findOne({where:{board, id}})
		if(car){
			if (car.matchPassword(password)){
				return res.json('Logado!')
			}
			return res.status(401).send({error: 'Wrong password, please type the right password'})
		}
		return res.status(401).send({error: 'Car not found, please register that car before login'})
	},
	auth: async(req, res, next)=>{
		const token = req.headers.token
		try {
			const decoded = jwt.verify(token, process.env.SECRET)
			req.userId = decoded.id
			return next()
		} catch (error) {
			return res.status(401).send({'error': 'Acesso não autorizado'})
		}
	}
}