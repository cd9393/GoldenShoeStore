import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReturnsForm from "../components/Returns/ReturnsForm";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getOrderDetails } from "../util/api";

const CreateReturn = () => {
  const { orderId } = useParams();
  const { status, error, data, sendRequest } = useHttp(getOrderDetails);

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    sendRequest(orderId);
  }, [sendRequest, orderId]);

  useEffect(() => {
    if (status === "completed" && !error) {
      setOrderItems(data.orderItems);
    }
  }, [status, error, data, orderId]);

  return (
    <section>
      <h4> Create a return</h4>
      {status === "pending" ? (
        <LoadingSpinner />
      ) : (
        <ReturnsForm orderItems={orderItems} />
      )}
    </section>
  );
};

export default CreateReturn;
