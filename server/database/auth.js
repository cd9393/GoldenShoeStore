const db = require("./db");

const registerUser = async (newUser) => {
  //Destructure req.body
  const { firstName, lastName, email, password } = newUser;

  try {
    const newUser = await db.query(
      "INSERT INTO users (first_name, last_name, user_email, user_password) VALUES ($1, $2, $3, $4) RETURNING *",
      [firstName, lastName, email, password]
    );
    return newUser.rows[0];
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getUser = async (email) => {
  try {
    const user = await db.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    return user;
  } catch (error) {
    console.error(error);
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = { registerUser, getUser };
