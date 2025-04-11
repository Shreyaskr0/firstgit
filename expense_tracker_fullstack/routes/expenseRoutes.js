const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/add', expenseController.addExpense);
router.get('/all', expenseController.getAllExpenses);
router.delete('/delete/:id', expenseController.deleteExpense);
router.put('/edit/:id', expenseController.editExpense);

module.exports = router;
