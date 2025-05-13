const express = require('express');
const path = require('path');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/signin.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/signup.html'));
});

router.post('/user/signup', authController.postSignUp);

// ✅ NEW: Login route
router.post('/user/login', authController.postLogin);

module.exports = router;
