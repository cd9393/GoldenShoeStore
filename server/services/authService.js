const bcrypt = require("bcrypt");
const auth = require("../database/auth");
const jwtGenerator = require("../utils/jwtGenerator");

const registerUser = async (body) => {
  const { password, email } = body;

  // check if user already exists
  let userExists;
  try {
    const user = await auth.getUser(email);
    if (user.rows.length > 0) {
      userExists = true;
    }
  } catch (error) {
    throw error;
  }
  if (userExists) {
    throw { status: 409, message: "Email already exists" };
  }

  //can check validitiy of password, i.e longer than 8 characters and includes upercase/lowercase/number/characters

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

const loginUser = async (body) => {
  const { email, password } = body;
  let user;
  try {
    user = await auth.getUser(email);
  } catch (error) {
    throw error;
  }

  if (user.rows.length === 0) {
    throw { status: 401, message: "Email or Password is incorrect" };
  }

  const validPassword = await bcrypt.compare(
    password,
    user.rows[0].user_password
  );

  if (!validPassword) {
    throw { status: 401, message: "Email or Password is incorrect" };
  }

  const token = jwtGenerator(user.rows[0].user_id);
  return token;
};

module.exports = {
  registerUser,
  loginUser,
};
