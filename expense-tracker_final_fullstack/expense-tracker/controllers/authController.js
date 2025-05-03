const User = require('../models/user');

const postSignUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.send(`<h2>User created successfully!</h2><a href="/signin">Go to Sign In</a>`);
  } catch (err) {
    console.error(err);
    res.status(500).send(`<h2>Error creating user</h2><p>${err}</p>`);
  }
};

module.exports = { postSignUp };
