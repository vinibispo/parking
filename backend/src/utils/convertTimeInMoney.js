const mom = require('moment')
const {Op} = require('sequelize')
const {Car, Parking} = require('../models')

const convertTimeInMoney = async (id)=>{
    const parkings = await Parking.findAll()
    const parking = parkings[0]
    const car = await Car.findOne({
        where:{
            [Op.and]: [
                {
                    status: 1
                }, 
                {
                    id
                }
            ]
        }
    })
    if(car && parking){
        const date_car = mom(car.updated_at)
        const amount_hours = mom().diff(date_car, 'hours')
        const money = parking.price_per_hour * amount_hours
        car.money = car.money - money
        car.status = 0
        parking.total_money = parking.total_money + money
        parking.save()
        car.save() 
    }
}
module.exports = convertTimeInMoney