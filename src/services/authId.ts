import { useState } from "react";
import api from "../api";

export const useAuthId = () => {
  const [valid, setValid] = useState(true);
  const [data, setData] = useState("");
  const validate = async (id: string) => {
    try {
      const data = await api.validateProduct(id);
      if (data?.product) {
        setData(data.product?.textPrice);
      }else
      setValid(false)
    } catch (error) {
      console.log(error);
    }
  };
  return { valid, validate, data };
};
