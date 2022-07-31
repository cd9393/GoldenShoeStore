import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getOrders } from "../util/api";

const Orders = () => {
  const { status, error, data, sendRequest } = useHttp(getOrders);
  useEffect(() => {}, []);
  return (
    <section>
      <h1>Orders</h1>
      <div>
        <div>Img</div>
      </div>
    </section>
  );
};

export default Orders;
