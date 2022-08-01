import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeliveryAddress from "../components/OrderDetails/DeliveryAddress";
import OrderHeader from "../components/OrderDetails/OrderHeader";
import OrderSummary from "../components/OrderDetails/OrderSummary";
import OrderTotals from "../components/OrderDetails/OrderTotals";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getOrderDetails } from "../util/api";
import { formatDateToText } from "../util/formatDate";

const OrderDetails = () => {
  const { status, error, data, sendRequest } = useHttp(getOrderDetails);
  const { orderId } = useParams();
  const [orderInfo, setOrderInfo] = useState("");
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    sendRequest(orderId);
  }, [sendRequest, orderId]);

  useEffect(() => {
    if (status === "completed" && !error) {
      setOrderItems(data.orderItems);
      setOrderInfo(data?.order);
    }
  }, [status, error, data, orderId]);

  return (
    <div>
      {status === "pending" ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1> Order Details</h1>
          <OrderHeader
            orderNum={orderInfo.order_id}
            orderDate={formatDateToText(orderInfo.created_at)}
          />
          <DeliveryAddress
            address={{
              name: "Craig dunlop",
              street: "2/2 102 novar drive",
              city: "Glasgow",
              postcode: "G12 9SU",
              country: "UK",
              mobile: "07739417135",
            }}
          />
          <OrderSummary order={orderInfo} orderItems={orderItems} />
          <OrderTotals />
        </>
      )}
    </div>
  );
};

export default OrderDetails;
