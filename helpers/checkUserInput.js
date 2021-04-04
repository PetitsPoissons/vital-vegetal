module.exports = function (req, res, next) {
  const { username, email, password } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === '/signup') {
    if (![username, email, password].every(Boolean)) {
      return res.status(400).json({
        errorMsg: 'Missing credentials',
      });
    } else if (!validEmail(email)) {
      return res.status(400).json({
        errorMsg: 'Invalid email',
      });
    } else if (password.length < 6) {
      return res.status(400).json({
        errorMsg: 'Invalid password',
      });
    }
  } else if (req.path === '/signin') {
    if (![email, password].every(Boolean)) {
      return res.status(400).json({
        errorMsg: 'Missing credentials',
      });
    } else if (!validEmail(email)) {
      return res.status(400).json({
        errorMsg: 'Invalid email',
      });
    } else if (password.length < 6) {
      return res.status(400).json({
        errorMsg: 'Invalid password',
      });
    }
  }

  next();
};
