const {Parking} = require('../models')

module.exports = {
	async create(req, res){
		const {name, price_per_hour, total_money} = req.body
		if(price_per_hour && total_money){
			const parking = await Parking.create({name, price_per_hour, total_money})
			return res.status(201).send({parking})
		}
		const parking = await Parking.create({name})
		return res.status(201).send({parking})
	}
}