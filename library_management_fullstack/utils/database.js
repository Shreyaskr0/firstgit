const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library_db', 'root', 'hello1', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
