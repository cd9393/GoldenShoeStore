const express = require("express");
const router = express.Router();
const orderItemsController = require("../controllers/orderItemsController");
const validOrderItemInfo = require("../middleware/validOrderItemInfo");

router.get("/", orderItemsController.getAllOrderItems);

router.get("/:orderItemId", orderItemsController.getOneOrderItem);

router.post("/", validOrderItemInfo, orderItemsController.createNewOrderItem);

router.put(
  "/:orderItemId",
  validOrderItemInfo,
  orderItemsController.updateOneOrderItem
);

router.delete("/:orderItemId", orderItemsController.deleteOneOrderItem);

module.exports = router;
