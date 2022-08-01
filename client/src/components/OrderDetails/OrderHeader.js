import { Link } from "react-router-dom";
import classes from "./OrderHeader.module.css";

const OrderHeader = ({ orderNum, orderDate }) => {
  return (
    <section className={classes.headerSection}>
      <div className={classes.headerContainer}>
        <span>
          Order No: <span>{orderNum}</span>
        </span>
        <span>
          Order Date: <span>{orderDate}</span>
        </span>
        <Link to={`/account/orders/4/create-return`}>
          <div className={classes.returnLink}>
            <span>Create Return</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default OrderHeader;
