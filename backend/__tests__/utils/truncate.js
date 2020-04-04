const {Car} = require('../../src/models')
const {map} = require('lodash')
module.exports = async ()=>{
    return await Car.destroy({where:{}, truncate: true})
}