const {sequelize} = require('../../src/models')
module.exports = async ()=>{
	return await Promise.all(Object.keys(sequelize.models).map(key=>{
		return sequelize.models[key].destroy({where:{}, force: true, truncate: true})
	}))
}