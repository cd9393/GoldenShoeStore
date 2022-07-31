const orderService = require("../services/orderService");

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await orderService.getAllOrders();
    res.send({ status: "OK", data: allOrders });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneOrder = async (req, res) => {
  const { orderId } = req.params;
  if (!orderId) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':orderId' can not be empty" },
    });
  }

  try {
    const order = await orderService.getOneOrder(orderId);
    res.send({ status: "OK", data: order });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewOrder = async (req, res) => {
  const { user_id, status } = req.body;
  if (![user_id, status].every(Boolean)) {
    return res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or empty: 'user_id', 'status'",
      },
    });
  }

  const newOrder = {
    user_id,
    status,
  };

  try {
    const createdOrder = await orderService.createNewOrder(newOrder);
    res.status(201).send({ status: "OK", data: createdOrder });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneOrder = async (req, res) => {
  const { user_id, status, created_at } = req.body;
  const { orderId } = req.params;

  if (!orderId) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':orderId' can not be empty" },
    });
  }

  if (![user_id, status, created_at].every(Boolean)) {
    return res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or empty: 'user_id', 'status', 'created_at'",
      },
    });
  }

  try {
    const updatedOrder = await orderService.updateOneOrder(orderId, req.body);
    res.send({ status: "OK", data: updatedOrder });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneOrder = async (req, res) => {
  const {
    params: { orderId },
  } = req;
  if (!orderId) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':orderId' can not be empty" },
    });
  }

  try {
    await orderService.deleteOneOrder(orderId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOrdersForAccount = async (req, res) => {
  const { user } = req;

  if (!user) {
    throw { status: 403, message: "Not Authorized" };
  }

  try {
    const orders = await orderService.getOrdersForAccount(user);
    res.send({
      status: "OK",
      data: orders,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllOrders,
  getOneOrder,
  createNewOrder,
  updateOneOrder,
  deleteOneOrder,
  getOrdersForAccount,
};
