const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Book = sequelize.define('Book', {
  name: { type: DataTypes.STRING, allowNull: false },
  takenAt: { type: DataTypes.DATE, allowNull: true },
  returnAt: { type: DataTypes.DATE, allowNull: true },
  isReturned: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Book;
