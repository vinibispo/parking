const {Admin} = require('../models')

module.exports = {
	async index (req, res) {
		const admins = await Admin.findAll()
		if (admins) {
			return res.send(admins)
		}
	},
	async create (req, res) {
		const {name, email, pass} = req.body
		const admin = await Admin.create({name, email, pass})
		return res.status(201).send(admin)
	},
	async update (req, res) {
		const {name, email, pass} = req.body
		const {id} = req.params
		const admin = await Admin.findOne({where: {id}})
		if(admin){
			if(name) admin.name = name
			if(pass) admin.pass = pass
			if(email) admin.email = email
			await admin.save()
			return res.status(204).send(admin)
		}
		return res.status(401).send({error: 'There is no user'})
	},
	/* eslint no-unused-vars: ["error", { "args": "none" }] */
	async remove (req, res) {
		const {id} = req.params
		if (id) {
			await Admin.destroy({ where:{ id}})
			return res.status(204).send()
		}
		return res.status(401).send({error: 'Error in delete admin'})
	},
	async login (req, res){
		const {email, pass} = req.body
		const admin = await Admin.findOne({where: {email}})
		if(admin){
			if(admin.matchPassword(pass)){
				return res.send(admin)
			}
			return res.status(401).send({error: 'The passwords don\'t match'})
		}
		return res.status(401).send({error: 'There is no such user with this email'})
	}
}