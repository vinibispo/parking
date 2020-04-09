const {Car} = require('../models')
const {convertTimeInMoney} = require('../utils/')
module.exports = {
	create: async (req, res)=>{
		const {board, password} = req.body
		const car = await Car.create({board, password})
		return res.status(201).json({
			car,
		})
	},
	login: async (req, res)=>{
		const {board, password} = req.body
		const car = await Car.findOne({where:{board}})
		if(car){
			if (car.matchPassword(password)){
				return res.status(200).send(car)
			}
			return res.status(401).send({error: 'Wrong password, please type the right password'})
		}
		return res.status(401).send({error: 'Car not found, please register that car before login'})
	},
	async pay(req, res){
		const {board, password} = req.body
		const car = await Car.findOne({where: {board}})
		if(car){
			if (car.matchPassword(password)){
				const newCar = await convertTimeInMoney(board)
				if(newCar){
					return res.send(newCar)
				}
			}
		}
		return res.status(401).send({error: 'Erro ao processar pagamento'})
	},
	async request(req, res){
		const {board, password} = req.body
		const car = await Car.findOne({where: {board}})
		if(car){
			if(car.matchPassword(password)){
				car.status = 1
				await car.save()
				return res.json(car)
			}
		}
		return res.status(401).send({error: 'Erro ao processar pedir pra estacionar'})
	}
}