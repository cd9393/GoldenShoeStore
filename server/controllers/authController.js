const registerUser = async (req, res) => {
  try {
    const token = await authService.registerUser(req.body);
    res.status(201).send({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {};

module.exports = {
  registerUser,
  login,
};
