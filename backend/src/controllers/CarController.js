const {Car} = require('../models')
const {promisify} = require('util')
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
        const {token} = req.headers
        try{
            await promisify(jwt.verify)(token, process.env.SECRET)
            return res.json("Logado!")
        }
        catch(err){
            return res.status(401).json({"error": "You can't log in an account that not belongs you"})
        }
    }
}