'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cars', {
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      board: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      money: {
        type: Sequelize.DECIMAL,
        defaultValue: 200,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('cars');
  }
};
