const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 100],
      isStrong(value) {
        if (!/(?=.*[A-Za-z])(?=.*\d)/.test(value)) {
          throw new Error('Password must contain both letters and numbers.');
        }
      }
    }
  }
}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;
