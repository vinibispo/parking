'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parking = sequelize.define('Parking', {
    name: DataTypes.STRING,
    price_per_hour: DataTypes.DECIMAL,
    total_money: DataTypes.DECIMAL
  }, {
    hooks:{
      beforeSave: async parking =>{
        if(!parking.price_per_hour){
          parking.price_per_hour = 10
        }
        if(!parking.total_money){
          parking.total_money = 0
        }
      }
    }
  });
  return Parking;
};