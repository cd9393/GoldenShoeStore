const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");
    if (!jwtToken) {
      throw { status: 401, message: "No token provided" };
    }

    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = payload.user;
  } catch (error) {
    next(error);
  }

  next();
};
