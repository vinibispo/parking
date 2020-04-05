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
        const car = await Car.findOne({board, id})
        console.log(car)
        return res.json("Logado!")
    },
    auth: async(req, res, next)=>{
        const token = req.headers.token
        try {
            const decoded = jwt.verify(token, process.env.SECRET)
            req.userId = decoded.id
            return next()
        } catch (error) {
            console.log(error)
            return res.status(401).send({"error": "Acesso não autorizado"})
        }
    }
}