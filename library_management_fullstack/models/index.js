const sequelize = require('../utils/database');
const Book = require('./book');
const BorrowHistory = require('./borrow');

sequelize.sync();

module.exports = { Book, BorrowHistory };
