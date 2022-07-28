const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orderController");

router.get("/", ordersController.getAllOrders);

router.get("/:orderId", ordersController.getOneOrder);

router.post("/", ordersController.createNewOrder);

router.put("/:orderId", ordersController.updateOneOrder);

router.delete("/:orderId", ordersController.deleteOneOrder);

module.exports = router;
