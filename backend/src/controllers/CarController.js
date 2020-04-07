const {Car} = require('../models')
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
		const car = await Car.findOne({where:{board}})
		if(car){
			if (car.matchPassword(password)){
				return res.json('Logado!')
			}
			return res.status(401).send({error: 'Wrong password, please type the right password'})
		}
		return res.status(401).send({error: 'Car not found, please register that car before login'})
	},
}