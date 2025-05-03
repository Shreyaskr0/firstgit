const express = require('express');
const path = require('path');
const sequelize = require('./utils/database');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(authRoutes);

// Connect to DB and start server
sequelize.sync()
  .then(result => {
    app.listen(3000, () => console.log('Server started on http://localhost:3000'));
  })
  .catch(err => console.log(err));
