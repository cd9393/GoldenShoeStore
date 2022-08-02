import OrderItemSummary from "./OrderItemSummary";
import classes from "./OrderSummary.module.css";

const OrderSummary = ({ order, orderItems }) => {
  const { status } = order;
  return (
    <section className={classes.summaryContainer}>
      <div className={classes.flexColumn}>
        <div className={classes.summaryHeaderContainer}>
          <h4>Order status : {status}!</h4>
        </div>
        {status === "delivered" && <span>Delivered on: 24 Jul 2022 </span>}
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          natus!
        </span>
      </div>
      <div>
        {orderItems.map((item) => (
          <OrderItemSummary
            key={item.order_item_id}
            name={item.product_name}
            price={item.product_price}
            quantity={item.product_quantity}
            size={item.product_size}
          />
        ))}
        <a href={`https://www.evri.com/`}>
          <div className={classes.trackLink}>
            <span>Track parcel</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default OrderSummary;
