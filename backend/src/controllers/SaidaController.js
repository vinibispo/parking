const {Saida} = require('../models')

module.exports = {
	async index (req, res) {
		const saidas = await Saida.findAll()
		if (saidas) {
			return res.send(saidas)
		}
	},
	async create (req, res) {
		const {nome, tipo, valor} = req.body
		const admin = await Saida.create({nome, tipo, valor})
		return res.status(201).send(admin)
	},
	async update (req, res) {
		const {nome, tipo, valor} = req.body
		const {id} = req.params
		const saida = await Saida.findOne({where: {id}})
		if(saida){
			if(nome) saida.nome = nome
			if(valor) saida.valor = valor
			if(tipo) saida.tipo = tipo
			await saida.save()
			return res.status(204).send(saida)
		}
		return res.status(401).send({error: 'There is no user'})
	},
	/* eslint no-unused-vars: ["error", { "args": "none" }] */
	async remove (req, res) {
		const {id} = req.params
		if (id) {
			await Saida.destroy({ where:{ id}})
			return res.status(204).send()
		}
		return res.status(401).send({error: 'Error in delete saida'})
	},
}