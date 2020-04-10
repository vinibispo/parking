'use strict';
module.exports = (sequelize, DataTypes) => {
  const Despesa = sequelize.define('Despesa', {
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    valor: DataTypes.DECIMAL
  }, {});
  Despesa.associate = function(models) {
    // associations can be defined here
  };
  return Despesa;
};