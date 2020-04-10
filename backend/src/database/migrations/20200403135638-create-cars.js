'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('cars', {
			id:{
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			board: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			status:{
				type: Sequelize.INTEGER,
				defaultValue: 1
			},
			money: {
				type: Sequelize.DECIMAL,
				defaultValue: 200,
				allowNull: false
			},
			password_hash:{
				type: Sequelize.STRING,
				allowNull: false
			},
			created_at:{
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at:{
				type: Sequelize.DATE,
				allowNull: false
			}
		})
	},
	/* eslint no-unused-vars: ["error", { "args": "none" }] */
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('cars')
	}
}
