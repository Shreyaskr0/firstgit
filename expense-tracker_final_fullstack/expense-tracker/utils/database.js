const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense', 'root', 'hello1', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
