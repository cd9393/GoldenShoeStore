const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const jwtGenerator = require("../utils/jwtGenerator");
const authController = require("../controllers/authController");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");
const db = require("../database/db");

router.post("/register", validInfo, authController.registerUser);

router.post("/login", validInfo, authController.login);

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
