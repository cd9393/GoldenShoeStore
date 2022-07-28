const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");
    if (!jwtToken) {
      throw { status: 400, message: "Not Authorized" };
    }

    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);

    req.user = payload.user;
  } catch (error) {
    throw { status: 403, message: "Not Authorized" };
  }

  next();
};
