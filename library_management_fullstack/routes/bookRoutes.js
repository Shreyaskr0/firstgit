const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/search', bookController.searchBooks);
router.post('/return/:id', bookController.returnBook);
router.get('/history', bookController.getHistory);

module.exports = router;
