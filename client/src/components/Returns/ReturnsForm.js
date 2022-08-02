import classes from "./ReturnsForm.module.css";

import OrderItemSummary from "../OrderDetails/OrderItemSummary";

const ReturnsForm = ({ orderItems }) => {
  return (
    <div>
      <form>
        {orderItems.map((item) => {
          const {
            product_name,
            product_price,
            product_size,
            product_quantity,
          } = item;

          return (
            <div className={classes.itemContainer}>
              <input
                className={classes.checkbox}
                onChange={(event) => console.log(event.target)}
                type="checkbox"
              />
              <div>
                <OrderItemSummary
                  name={product_name}
                  price={product_price}
                  size={product_size}
                  quantity={product_quantity}
                />
                <select>
                  <option value="Wrong size">Wrong size</option>
                  <option value="Wrong colour">Wrong colour</option>
                  <option value="No longer needed">No longer want</option>
                </select>
              </div>
            </div>
          );
        })}
        <button className={classes.btn}>Create Return</button>
      </form>
    </div>
  );
};

export default ReturnsForm;
