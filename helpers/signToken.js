require('dotenv').config(); // access variables set in the .env file via `process.env.VARIABLE_NAME` syntax
const jwt = require('jsonwebtoken');

module.exports = function (user) {
  return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};
