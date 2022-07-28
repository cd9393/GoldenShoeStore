const db = require("./db");

const registerUser = async (newUser) => {
  //Destructure req.body
  const { firstName, lastName, email, password } = newUser;

  //check if user exists (if user exists throw error)
  const user = await db.query("SELECT * FROM users where user_email = $1", [
    email,
  ]);

  if (user.rows.length > 0) {
    throw { status: 409, message: "Email already exists" };
  }

  // enter the user inside the database
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

module.exports = { registerUser };
