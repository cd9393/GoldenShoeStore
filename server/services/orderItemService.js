const orderItems = require("../database/orderItem");

const getAllOrderItems = async () => {
  try {
    const allOrderItems = await orderItems.getAllOrderItems();
    return allOrderItems;
  } catch (error) {
    throw error;
  }
};

const getOneOrderItem = async (orderItemId) => {
  try {
    const orderItem = await orderItems.getOneOrderItem(orderItemId);
    return orderItem;
  } catch (error) {
    throw error;
  }
};

const createNewOrderItem = async (newOrderItem) => {
  try {
    const createdOrderItem = await orderItems.createNewOrderItem(newOrderItem);
    return createdOrderItem;
  } catch (error) {
    throw error;
  }
};

const updateOneOrderItem = async (orderItem_id, changes) => {
  try {
    const updatedOrderItem = await orderItems.updateOneOrderItem(
      orderItem_id,
      changes
    );
    return updatedOrderItem;
  } catch (error) {
    throw error;
  }
};

const deleteOneOrderItem = async (orderItemId) => {
  try {
    await orderItems.deleteOneOrderItem(orderItemId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllOrderItems,
  getOneOrderItem,
  createNewOrderItem,
  updateOneOrderItem,
  deleteOneOrderItem,
};
