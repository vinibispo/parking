const mom = require('moment')
const {Op} = require('sequelize')
const {Car, Parking} = require('../models')

const convertTimeInMoney = async (board)=>{
    const parkings = await Parking.findAll()
    const parking = parkings[0]
    console.log(parking)
    const car = await Car.findOne({
        where:{
            [Op.and]: [
                {
                    status: 1
                }, 
                {
                    board
                }
            ]
        }
    })
    if(car && parking){
        const date_car = mom(car.updatedAt)
        const amount_hours = mom().diff(date_car, 'hours')
        const money = parking.price_per_hour * amount_hours
        const carmoney= car.money - money
        const total_money = Number(parking.total_money) + money
        car.money = carmoney
        car.status = 2
        parking.total_money = total_money
        console.log('CHEGUEI AQUI')
        await parking.save()
        await car.save()
        return car
    }
}
module.exports = convertTimeInMoney