import classes from "./OrderTotals.module.css";

const OrderTotals = () => {
  return (
    <section>
      <h4 className={classes.header}>ORDER TOTAL</h4>
      <div className={classes.totalsContainer}>
        <div className={classes.flexRow}>
          <span>Sub-total</span>
          <span className={classes.rowDetail}>£269.99</span>
        </div>
        <div className={classes.flexRow}>
          <span>Delivery</span>
          <span className={classes.rowDetail}>FREE</span>
        </div>
        <div className={classes.flexRow}>
          <span>Discount</span>
          <span className={classes.rowDetail}>£0.00</span>
        </div>
        <div className={classes.flexRow}>
          <span>Total</span>
          <span className={classes.rowDetail}>£539.98</span>
        </div>
      </div>
    </section>
  );
};

export default OrderTotals;
