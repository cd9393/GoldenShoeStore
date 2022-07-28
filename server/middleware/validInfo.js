module.exports = (req, res, next) => {
  const { email, firstName, lastName, password } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === "/register") {
    if (![email, firstName, lastName, password].every(Boolean)) {
      throw { status: 400, message: "Missing Credentials" };
    } else if (!validEmail(email)) {
      throw { status: 400, message: "Invalid Email" };
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      throw { status: 400, message: "Missing Credentials" };
    } else if (!validEmail(email)) {
      throw { status: 400, message: "Invalid Email" };
    }
  }
  next();
};
