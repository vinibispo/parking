'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parking = sequelize.define('Parking', {
    name: DataTypes.STRING,
    pricePerHour: DataTypes.DECIMAL,
    total_money: DataTypes.DECIMAL
  }, {
    hooks:{
      beforeSave: async parking =>{
        if(!parking.pricePerHour){
          parking.pricePerHour = 10
        }
        if(!parking.total_money){
          parking.total_money = 0
        }
      }
    }
  });
  return Parking;
};