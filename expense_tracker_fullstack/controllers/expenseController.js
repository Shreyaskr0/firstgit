const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
    try {
        const { description, amount, category } = req.body;
        const newExpense = await Expense.create({ description, amount, category });
        res.status(201).json(newExpense);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add expense' });
    }
};

exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Expense.destroy({ where: { id } });
        if (!deleted) return res.status(404).json({ error: 'Expense not found' });
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete expense' });
    }
};

exports.editExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, amount, category } = req.body;
        const expense = await Expense.findByPk(id);
        if (!expense) return res.status(404).json({ error: 'Expense not found' });

        expense.description = description;
        expense.amount = amount;
        expense.category = category;
        await expense.save();

        res.status(200).json(expense);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update expense' });
    }
};
