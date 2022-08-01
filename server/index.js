const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const auth = require("./routes/Auth");
const orders = require("./routes/Orders");
const orderItems = require("./routes/OrderItems");
const mailingContact = require("./routes/MailingContact");

const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 3000;

//middleware

app.use(cors());
app.use(express.json());

//ROUTES

app.use("/auth", auth);
app.use("/orders", orders);
app.use("/order-items", orderItems);
app.use("/mailing-contact", mailingContact);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
