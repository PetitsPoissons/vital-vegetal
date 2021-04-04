const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const checkToken = require('../helpers/checkToken');
const checkUserInput = require('../helpers/checkUserInput');
const signToken = require('../helpers/signToken');
const User = require('../models/User');

// @route   GET api/users/me
// @desc    Load logged in user info
// @access  Private
router.get('/me', checkToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/users/signin
// @desc    Sign in a user and return the token
// @access  Public
router.post('/signin', checkUserInput, async (req, res) => {
  const { email, password } = req.body;

  try {
    // find the user in the db, if any
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errorMsg: 'Invalid credentials' });
    }

    // verify user's password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errorMsg: 'Invalid credentials' });
    }

    // return the jsonwebtoken to the client
    const token = signToken(user);
    res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

// @route - POST api/users/signup
// @desc - Create a new user and return the token
// @access - Public
router.post('/signup', checkUserInput, async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // check if user already exists in db
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errorMsg: 'User already exists' });
    }

    // instantiate a new user
    newUser = new User({
      username,
      email,
      password,
    });

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    // save the new user to the db
    await newUser.save();

    // return the jsonwebtoken to the client
    const token = signToken(newUser);
    res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
