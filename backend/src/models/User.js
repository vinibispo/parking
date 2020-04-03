
module.exports = (sequelize, DataTypes)=>{
    sequelize.define('User', {
        board: DataTypes.STRING,
        
    })
}