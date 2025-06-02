const express = require('express');
const path = require('path');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Serve expense.html on /expense GET request
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'expense.html'));
});

// POST route to add an expense
router.post('/addexpense', expenseController.postAddExpense);

// GET route to fetch all expenses
router.get('/getexpenses', expenseController.getExpenses);

// DELETE route to delete an expense by ID
router.delete('/deleteexpense/:id', expenseController.deleteExpense);

module.exports = router;
