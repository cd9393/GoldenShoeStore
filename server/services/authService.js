const bcrypt = require("bcrypt");
const auth = require("../database/auth");
const jwtGenerator = require("../utils/jwtGenerator");

const registerUser = async (body) => {
  const { password } = body;
  // Bcrypt the user password
  const saltRound = 11;
  const salt = await bcrypt.genSalt(saltRound);

  const bcryptPassword = await bcrypt.hash(password, salt);

  const newUser = {
    ...body,
  };
  newUser.password = bcryptPassword;

  try {
    const createdUser = await auth.registerUser(newUser);
    const token = jwtGenerator(createdUser.user_id);
    return token;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registerUser,
};
