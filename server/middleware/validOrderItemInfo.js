module.exports = (req, res, next) => {
  const {
    order_id,
    product_name,
    product_size,
    product_price,
    product_quantity,
  } = req.body;

  if (
    ![
      order_id,
      product_name,
      product_size,
      product_price,
      product_quantity,
    ].every(Boolean)
  ) {
    throw {
      status: 400,
      message:
        "One of the following keys is missing or empty:'order_id','product_name','product_size','product_price','product_quantity'",
    };
  }

  next();
};
