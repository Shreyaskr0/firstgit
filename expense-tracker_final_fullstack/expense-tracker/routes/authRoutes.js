const express = require('express');
const path = require('path');
const authController = require('../controllers/authController');

const router = express.Router();

// Serve the signin.html page
router.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/signin.html'));
});

// Serve the signup.html page
router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/signup.html'));
});

// Handle POST signup form submission
router.post('/user/signup', authController.postSignUp);

module.exports = router;
