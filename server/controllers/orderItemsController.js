const orderItemService = require("../services/orderItemService");

const getAllOrderItems = async (req, res) => {
  try {
    const allOrderItems = await orderItemService.getAllOrderItems();
    res.send({ status: "OK", data: allOrderItems });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneOrderItem = async (req, res) => {
  const { orderItemId } = req.params;
  if (!orderItemId) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':orderItemId' can not be empty" },
    });
  }

  try {
    const orderItem = await orderItemService.getOneOrderItem(orderItemId);
    res.send({ status: "OK", data: orderItem });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewOrderItem = async (req, res) => {
  try {
    const createdOrderItem = await orderItemService.createNewOrderItem(
      req.body
    );
    res.status(201).send({ status: "OK", data: createdOrderItem });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneOrderItem = async (req, res) => {
  const { orderItemId } = req.params;

  if (!orderItemId) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':orderItemId' can not be empty" },
    });
  }

  try {
    const updatedOrderItem = await orderItemService.updateOneOrderItem(
      orderItemId,
      req.body
    );
    res.send({ status: "OK", data: updatedOrderItem });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneOrderItem = async (req, res) => {
  const {
    params: { orderItemId },
  } = req;

  if (!orderItemId) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':orderItemId' can not be empty" },
    });
  }

  try {
    await orderItemService.deleteOneOrderItem(orderItemId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllOrderItems,
  getOneOrderItem,
  createNewOrderItem,
  updateOneOrderItem,
  deleteOneOrderItem,
};
