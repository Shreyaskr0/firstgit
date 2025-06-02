const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./utils/database');
const User = require('./models/user');
const Expense = require('./models/expense');

const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRoutes);
app.use('/expense', expenseRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server started on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Database sync error:', err);
  });
