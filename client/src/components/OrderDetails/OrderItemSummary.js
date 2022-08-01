import classes from "./OrderItemSummary.module.css";

const OrderItemSummary = ({ name, price, size, quantity }) => {
  return (
    <div className={classes.flexRow}>
      <div className={classes.img}></div>
      <div className={classes.itemDetails}>
        <span>{name}</span>
        <span className={classes.rowTitle}>Price: £{price}</span>
        <span className={classes.rowTitle}>
          Size: <span className={classes.rowDetail}>{size}</span>
        </span>
        <span className={classes.rowTitle}>
          Quantity: <span className={classes.rowDetail}>{quantity}</span>
        </span>
      </div>
    </div>
  );
};

export default OrderItemSummary;
