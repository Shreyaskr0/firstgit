const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const BorrowHistory = sequelize.define('BorrowHistory', {
  name: { type: DataTypes.STRING },
  fine: { type: DataTypes.FLOAT },
  returnedOn: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = BorrowHistory;
