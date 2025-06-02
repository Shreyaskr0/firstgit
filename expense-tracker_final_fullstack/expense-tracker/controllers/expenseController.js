const Expense = require('../models/expense');

const postAddExpense = async (req, res) => {
  const { amount, description, category } = req.body;
  try {
    await Expense.create({ amount, description, category });
    res.status(201).json({ message: 'Expense added successfully' });
  } catch (err) {
    console.error('Error adding expense:', err);
    res.status(500).json({ error: 'Failed to add expense' });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (err) {
    console.error('Error fetching expenses:', err);
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
};

const deleteExpense = async (req, res) => {
  const expenseId = req.params.id;
  try {
    const deleted = await Expense.destroy({ where: { id: expenseId } });
    if (deleted) {
      res.status(200).json({ message: 'Expense deleted successfully' });
    } else {
      res.status(404).json({ error: 'Expense not found' });
    }
  } catch (err) {
    console.error('Error deleting expense:', err);
    res.status(500).json({ error: 'Failed to delete expense' });
  }
};

module.exports = { postAddExpense, getExpenses, deleteExpense };
