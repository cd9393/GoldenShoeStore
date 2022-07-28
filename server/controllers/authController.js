const authService = require("../services/authService");

const registerUser = async (req, res, next) => {
  try {
    const token = await authService.registerUser(req.body);
    res.status(201).send({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const token = await authService.loginUser(req.body);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  login,
};
