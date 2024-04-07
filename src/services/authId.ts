import { useState } from "react";
import api from "../api";

export const useAuthId = () => {
  const [valid, setValid] = useState(false);
  const [data, setData] = useState("");
  const validate = async (id: string) => {
    try {
      const data = await api.validateProduct(id);
      if (!data?.product) throw data.msg;
      setData(data.product?.textPrice);
      setValid(true);
    } catch (error) {
      console.log(error);
    }
  };
  return { valid, validate, data };
};
