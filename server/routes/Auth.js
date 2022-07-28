const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const jwtGenerator = require("../utils/jwtGenerator");
const authController = require("../controllers/authController");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");
const db = require("../database/db");

// router.post("/register", validInfo, async (req, res) => {
//   try {
//     //Destructure req.body
//     const { firstName, lastName, email, password } = req.body;

//     //check if user exists (if user exists throw error)
//     const user = await db.query("SELECT * FROM users where user_email = $1", [
//       email,
//     ]);

//     if (user.rows.length > 0) {
//       return res.status(409).send("Email already exists");
//     }

//     // Bcrypt the user password
//     const saltRound = 11;
//     const salt = await bcrypt.genSalt(saltRound);

//     const bcryptPassword = await bcrypt.hash(password, salt);

//     // enter the user inside the database
//     const newUser = await db.query(
//       "INSERT INTO users (first_name, last_name, user_email, user_password) VALUES ($1, $2, $3, $4) RETURNING *",
//       [firstName, lastName, email, bcryptPassword]
//     );

//     // generate our jwt token
//     const token = jwtGenerator(newUser.rows[0].user_id);
//     res.status(201).send({ token });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// });

router.post("/register", validInfo, authController.registerUser);

//login route
router.post("/login", validInfo, async (req, res) => {
  try {
    // get email and password from req
    const { email, password } = req.body;
    // check if email exists
    const user = await db.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Email or Password is incorrect");
    }

    // check password matches
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    if (!validPassword) {
      return res.status(401).json("Email or Password is incorrect");
    }
    //give them jwt token

    const token = jwtGenerator(user.rows[0].user_id);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
