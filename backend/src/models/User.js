
module.exports = (sequelize, DataTypes)=>{
    const Car = sequelize.define('Car', {
        board: DataTypes.STRING
    })
    return Car
}