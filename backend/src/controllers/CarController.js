const {Car} = require('../models')
const jwt = require('jsonwebtoken')
module.exports = {
    create: async (req, res)=>{
        const {board, password_hash} = req.body
        const car = await Car.create({board, password_hash})
        return res.status(201).json({
        car,
        token: car.generateToken()
    })
    },
    login: async (req, res)=>{
        const {board, password_hash} = req.body
        const {token} = req.headers
        if(await jwt.verify(token, process.env.SECRET)){
           return res.json("Logado!")
        }
        return res.status(401).json({"error": "You can't log in an account that not belongs you"})
    }
}