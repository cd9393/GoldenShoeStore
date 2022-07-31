const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orderController");
const authorization = require("../middleware/authorization");

router.get("/", ordersController.getAllOrders);

router.get("/my-orders", authorization, ordersController.getOrdersForAccount);

router.get("/:orderId", ordersController.getOneOrder);

router.post("/", ordersController.createNewOrder);

router.put("/:orderId", ordersController.updateOneOrder);

router.delete("/:orderId", ordersController.deleteOneOrder);

module.exports = router;
