const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense_db', 'root', 'hello1', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
