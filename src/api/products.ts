import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.baseURL = "http://localhost:5555";

// axios.defaults.baseURL = "http://192.168.1.72:5555";

export const addToCartProduct = async (id: string) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.post("/carts/add", { productId: id, token });
    if (data.msg) alert(data.msg);
    else alert(data.err);
  } catch (error) {
    console.log(error);
  }
};

export const useFetchItems = <T>(cb: Function) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();
  const [items, setData] = useState<T[]>([]);
  async function fetchItems() {
    try {
      setIsLoading(true);
      const data = await cb();
      setIsLoading(false);
      if (Array.isArray(data)) {
        setData(data);
      } else {
        throw "data is not an array type";
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  useEffect(() => {
    fetchItems();
  }, []);
  return { isLoading, error, items, fetchItems };
};
