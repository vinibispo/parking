'use strict';
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: async admin =>{
        if(admin.password){
          admin.password = await bcrypt.hash(admin.password, 8)
        }
      }
    }
  });
  Admin.prototype.matchPassword = function(password){
    bcrypt.compare(password, this.password)
  }
  return Admin;
};