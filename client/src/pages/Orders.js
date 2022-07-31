import { useEffect, useState } from "react";
import OrderInfo from "../components/Order/OrderInfo";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getOrders } from "../util/api";

const Orders = () => {
  const { status, error, data, sendRequest } = useHttp(getOrders);
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    if (status === "completed" && !error) {
      setOrders(data);
    }

    if (status === "completed" && error) {
      setErrors(error);
    }
  }, [data, error, status]);
  return (
    <section>
      {status === "pending" ? (
        <LoadingSpinner />
      ) : (
        <div>
          <h1>Orders</h1>
          {orders.map((order) => (
            <OrderInfo key={order.order_id} order={order} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Orders;
