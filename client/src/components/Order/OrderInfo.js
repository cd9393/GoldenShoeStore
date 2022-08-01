import { Link } from "react-router-dom";

import classes from "./OrderInfo.module.css";
import { formatDateToText } from "../../util/formatDate";

const OrderInfo = ({ order }) => {
  const { status, order_id, created_at } = order;
  return (
    <div className={classes.container}>
      <Link to={`/account/orders/${order_id}`}>
        <div className={classes.innerContainer}>
          <div className={classes.img}></div>
          <h4>Order Status: {status}</h4>
          <span>
            Order No: <span>{order_id}</span>
          </span>
          <span>
            Order Placed: <span>{formatDateToText(created_at)}</span>
          </span>
        </div>
      </Link>
      <Link to={`/account/orders/${order_id}/create-return`}>
        <div className={classes.returns}>
          <span>Create Return</span>
        </div>
      </Link>
    </div>
  );
};

export default OrderInfo;
