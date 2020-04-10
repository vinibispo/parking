'use strict'
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
	const Admin = sequelize.define('Admin', {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		pass: DataTypes.VIRTUAL,
		password: DataTypes.STRING
	}, {
		hooks: {
			beforeSave: async admin =>{
				if(admin.pass){
					admin.password = await bcrypt.hash(admin.pass, 8)
				}
			}
		}
	})
	Admin.prototype.matchPassword = function(password){
		return bcrypt.compare(password, this.password)
	}
	return Admin
}