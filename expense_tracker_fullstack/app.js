const express = require('express');
const app = express();
const sequelize = require('./utils/db');
const expenseRoutes = require('./routes/expenseRoutes');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/expenses', expenseRoutes);

sequelize.sync()
.then(() => {
    app.listen(3000, () => {
        console.log('Server running at http://localhost:3000');
    });
})
.catch(err => console.error(err));
