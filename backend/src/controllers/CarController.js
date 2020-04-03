const {Car} = require('../models')
const token = 1234556
module.exports = {
    create: async (req, res)=>{
        const {board, password_hash} = req.body
        const car = await Car.create({board, password_hash})
        return res.status(201).send(car)
    }
}