const Admin = require('../models/Admin')

module.exports = {
    async index (req, res) {
        const admins = await Admin.findAll()
        if (admins) {
            return res.send(admins)
        }
    },
    async create (req, res) {
        const {name, email, password} = req.body
        const admin = await Admin.create({name, email, password})
        return res.send(admin)
    },
    async update (req, res) {
        const {name, email, password} = req.body
        const {id} = req.params
        const admin = await Admin.findOne({where: {id}})
        if(admin){
            admin.name = name
            admin.password = password
            admin.email = email
            await admin.save()
        }
        
    }
}