const bcrypt = require('bcrypt');
const User = require('../models/user');

const SALT_ROUNDS = 10;

const postSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, SALT_ROUNDS, async (err, hashedPassword) => {
      if (err) {
        console.error('Hashing error:', err);
        return res.status(500).send(`<h2>Error while hashing password</h2><a href="/signup">Try Again</a>`);
      }

      try {
        const user = await User.create({ name, email, password: hashedPassword });
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
    });
  } catch (err) {
    console.error('Unexpected signup error:', err);
    res.status(500).send(`<h2>Something went wrong</h2><a href="/signup">Try Again</a>`);
  }
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send(`<script>alert("User does not exist"); window.location.href="/signin";</script>`);
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error('Compare error:', err);
        return res.status(500).send(`<h2>Error while checking password</h2><a href="/signin">Try Again</a>`);
      }

      if (!result) {
        return res.status(401).send(`<script>alert("Incorrect password"); window.location.href="/signin";</script>`);
      }

      res.send(`<script>alert("User logged in successfully"); window.location.href="/signin";</script>`);
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send(`<h2>Something went wrong</h2><a href="/signin">Try Again</a>`);
  }
};

module.exports = { postSignUp, postLogin };
