const {Despesa: Saida, Parking} = require('../models')
const sequelize = require('sequelize')
module.exports = {
	async index (req, res) {
		const saidas = await Saida.findAll()
		if (saidas) {
			return res.send(saidas)
		}
	},
  async one (req, res) {
  const {id} = req.params
    const saida = await Saida.findOne({where: {id}})
		return res.send(saida)
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
	async entradaesaida(req, res){
		const entradas = await Parking.findAll()
		const entrada = entradas[0].total_money
		const saida = await Saida.findAll({
			attributes: [sequelize.fn('sum', sequelize.col('valor')), 'valor'],
			group: ['valor']
		})
		const valor = saida.reduce((total, saida) => total + Number(saida.valor), 0 )
		return res.send([valor, Number(entrada)])
	}
}
