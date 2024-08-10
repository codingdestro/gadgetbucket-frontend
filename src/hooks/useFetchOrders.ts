import { useState } from "react";
import api from "../api";
const useFetchOrders = () => {
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orders, setOrders] = useState([]);

  const fetch = async () => {
    setLoading(true);
    const token = localStorage.getItem("token") || "";

    try {
      const data = await api.orders.get(token);
      if (data?.orderList) {
        console.log(data);
        setSuccess(true);
        setOrders(data?.orderList);
      } else {
        setSuccess(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
    }
  };
  return { isLoading, success, orders, fetch };
};

export default useFetchOrders;
