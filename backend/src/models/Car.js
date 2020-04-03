const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = (sequelize, DataTypes)=>{
    const Car = sequelize.define('Car', {
        board: DataTypes.STRING,
        money: DataTypes.DECIMAL,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING
    },{
    hooks:{
        beforeSave: async car=>{
            if(car.password){
                car.password_hash = await bcryptjs.hash(car.password, 8) 
            }
        }}
    })
    return Car
}