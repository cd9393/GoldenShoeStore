import classes from "./OrderTotals.module.css";

const OrderTotals = ({ subTotal, delivery, discount, total }) => {
  return (
    <section>
      <h4 className={classes.header}>ORDER TOTAL</h4>
      <div className={classes.totalsContainer}>
        <div className={classes.flexRow}>
          <span>Sub-total</span>
          <span className={classes.rowDetail}>£{subTotal}</span>
        </div>
        <div className={classes.flexRow}>
          <span>Delivery</span>
          <span className={classes.rowDetail}>{delivery}</span>
        </div>
        <div className={classes.flexRow}>
          <span>Discount</span>
          <span className={classes.rowDetail}>£{discount}</span>
        </div>
        <div className={classes.flexRow}>
          <span>Total</span>
          <span className={classes.rowDetail}>£{total}</span>
        </div>
      </div>
    </section>
  );
};

export default OrderTotals;
