const db = require("./db");

const getAllOrderItems = async () => {
  try {
    const orderItems = await db.query("SELECT * FROM order_items");
    return orderItems.rows;
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const getOneOrderItem = async (orderItemId) => {
  try {
    const orderItem = await db.query(
      "SELECT * FROM order_items WHERE order_item_id = $1",
      [orderItemId]
    );
    return orderItem.rows[0];
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const createNewOrderItem = async (newOrderItem) => {
  const {
    order_id,
    product_name,
    product_size,
    product_price,
    product_quantity,
  } = newOrderItem;
  try {
    const newOrderItem = await db.query(
      "INSERT INTO order_items (order_id,product_name,product_size,product_price,product_quantity) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [order_id, product_name, product_size, product_price, product_quantity]
    );
    return newOrderItem.rows[0];
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneOrderItem = async (orderItemId, orderItemFields) => {
  try {
    const {
      order_id,
      product_name,
      product_size,
      product_price,
      product_quantity,
    } = orderItemFields;

    const updatedOrderItem = await db.query(
      "UPDATE order_items SET order_id = $1, product_name = $2, product_size = $3, product_price = $4, product_quantity = $5 WHERE order_item_id = $6 RETURNING *",
      [
        order_id,
        product_name,
        product_size,
        product_price,
        product_quantity,
        orderItemId,
      ]
    );
    return updatedOrderItem.rows[0];
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const deleteOneOrderItem = async (orderItemId) => {
  try {
    await db.query("DELETE FROM order_items where order_item_id = $1", [
      orderItemId,
    ]);
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllOrderItems,
  createNewOrderItem,
  getOneOrderItem,
  deleteOneOrderItem,
  updateOneOrderItem,
};
