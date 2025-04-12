const { Book, BorrowHistory } = require('../models');
const { Op } = require('sequelize');


exports.searchBooks = async (req, res) => {
  try {
    const { query } = req.query;
    let books;

    if (query) {
      books = await Book.findAll({
        where: {
          name: { [Op.like]: `%${query}%` },
          isReturned: false,
        },
        order: [['name', 'ASC']],
      });
    } else {
      books = await Book.findAll({
        where: { isReturned: false },
        order: [['name', 'ASC']],
      });
    }

    res.json(books);
  } catch (err) {
    console.error('Error searching books:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.returnBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ error: 'Book not found' });

    const now = new Date();
    const returnTime = book.returnAt;
    const diffMs = now - new Date(returnTime);
    const hoursLate = Math.ceil(diffMs / (1000 * 60 * 60));
    const fine = hoursLate > 0 ? hoursLate * 50 : 0;

    book.isReturned = true;
    await book.save();

    const history = await BorrowHistory.create({
      name: book.name,
      fine,
      returnedOn: now,
    });

    res.json({ fine, history });
  } catch (err) {
    console.error('Error returning book:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getHistory = async (req, res) => {
  try {
    const history = await BorrowHistory.findAll({
      order: [['returnedOn', ]],
    });
    res.json(history);
  } catch (err) {
    console.error('Error fetching history:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
