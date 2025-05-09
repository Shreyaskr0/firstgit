const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
});

module.exports = User;
