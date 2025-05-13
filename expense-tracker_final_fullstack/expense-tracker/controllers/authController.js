const User = require('../models/user');

const postSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.send(`<h2>User created successfully!</h2><a href="/signin">Go to Sign In</a>`);
  } catch (err) {
    console.error('Signup error:', err);

    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).send(`<h2>Error: User already exists</h2><a href="/signup">Try Again</a>`);
    } else if (err.errors && err.errors.length > 0) {
      res.status(400).send(`<h2>Error: ${err.errors[0].message}</h2><a href="/signup">Try Again</a>`);
    } else {
      res.status(500).send(`<h2>Something went wrong</h2><pre>${err.message}</pre><a href="/signup">Try Again</a>`);
    }
  }
};

module.exports = { postSignUp };
