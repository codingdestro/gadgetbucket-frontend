import { useState } from "react";
import api from "../api";
const useFetchOrderItems = () => {
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [items, setItems] = useState([]);

  const fetch = async (cartToken: string) => {
    setLoading(true);
    try {
      const data = await api.orders.fetchOrderItems(cartToken);
      if (data?.orderList) {
        setSuccess(true);
        setItems(data?.orderList);
      } else {
        setSuccess(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
    }
  };
  return { isLoading, success, items, fetch };
};

export default useFetchOrderItems;
