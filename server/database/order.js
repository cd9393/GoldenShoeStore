const db = require("./db");

const getAllOrders = async () => {
  try {
    const orders = await db.query("SELECT * FROM orders");
    return orders.rows;
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const getOneOrder = async (orderId) => {
  try {
    const order = await db.query("SELECT * FROM orders WHERE order_id = $1", [
      orderId,
    ]);
    return order.rows[0];
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const createNewOrder = async (newOrder) => {
  const { user_id, status, created_at, last_updated } = newOrder;
  try {
    const newOrder = await db.query(
      "INSERT INTO orders (user_id, status, created_at, last_updated) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, status, created_at, last_updated]
    );
    return newOrder.rows[0];
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneOrder = async (orderId, orderFields) => {
  try {
    const last_updated = new Date().toISOString();
    const { user_id, status, created_at } = orderFields;

    const updatedOrder = await db.query(
      "UPDATE orders SET user_id = $1, status = $2, created_at = $3, last_updated = $4 WHERE order_id = $5 RETURNING *",
      [user_id, status, created_at, last_updated, orderId]
    );
    return updatedOrder.rows[0];
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const deleteOneOrder = async (orderId) => {
  try {
    await db.query("DELETE FROM orders where order_id = $1", [orderId]);
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

const getOrdersForAccount = async (user) => {
  try {
    const orders = await db.query("SELECT * FROM orders where user_id = $1", [
      user,
    ]);
    return orders.rows;
  } catch (error) {
    console.error(error.message);
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getAllOrders,
  createNewOrder,
  getOneOrder,
  deleteOneOrder,
  updateOneOrder,
  getOrdersForAccount,
};
