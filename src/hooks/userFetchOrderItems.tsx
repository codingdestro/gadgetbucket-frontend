import { useState } from "react";
import api from "../api";
import { CartType } from "../store/useCarts";
const useFetchOrderItems = () => {
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [items, setItems] = useState<CartType[]>([]);

  const fetch = async (cartToken: string) => {
    setLoading(true);
    try {
      const data = await api.orders.fetchOrderItems(cartToken);
      if (data?.cart) {
        setSuccess(true);
        setItems(data?.cart);
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
