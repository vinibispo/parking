const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = (sequelize, DataTypes)=>{
	const Car = sequelize.define('Car', {
		board: DataTypes.STRING,
		money: DataTypes.DECIMAL,
		password: DataTypes.VIRTUAL,
		status: DataTypes.INTEGER,
		password_hash: DataTypes.STRING
	},{
		hooks:{
			beforeSave: async car=>{
				if(!car.status){
					car.status = 1
				}
				if(car.password){
					car.password_hash = await bcrypt.hash(car.password, 8) 
				}
			}}
	})
	Car.prototype.matchPassword = function(password){
		return bcrypt.compare(password,this.password_hash)
	}
	Car.prototype.generateToken = function(){
		return jwt.sign({id: this.id}, process.env.SECRET)
	}
	return Car
}