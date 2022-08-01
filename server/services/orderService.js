const orders = require("../database/order");

const getAllOrders = async () => {
  try {
    const allOrders = await orders.getAllOrders();
    return allOrders;
  } catch (error) {
    throw error;
  }
};

const getOneOrder = async (orderId) => {
  try {
    const order = await orders.getOneOrder(orderId);
    return order;
  } catch (error) {
    throw error;
  }
};

const createNewOrder = async (newOrder) => {
  const orderToInsert = {
    ...newOrder,
    created_at: new Date().toISOString(),
    last_updated: new Date().toISOString(),
  };

  try {
    const createdOrder = await orders.createNewOrder(orderToInsert);
    return createdOrder;
  } catch (error) {
    throw error;
  }
};

const updateOneOrder = async (order_id, changes) => {
  try {
    const updatedOrder = await orders.updateOneOrder(order_id, changes);
    return updatedOrder;
  } catch (error) {
    throw error;
  }
};

const deleteOneOrder = async (orderId) => {
  try {
    await orders.deleteOneOrder(orderId);
  } catch (error) {
    throw error;
  }
};

const getOrdersForAccount = async (user) => {
  try {
    return await orders.getOrdersForAccount(user);
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
