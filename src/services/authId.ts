import axios from "axios";
import { useState } from "react";

export const useAuthId = () => {
  const [valid, setValid] = useState(false);
  const [data, setData] = useState("");
  const validate = async (id: string) => {
    try {
      const { data } = await axios.post("/validate/product/id", { id });
      if (!data?.product) throw data.msg;
      setData(data.product?.textPrice);
      setValid(true);
    } catch (error) {
      console.log(error);
    }
  };
  return { valid, validate, data };
};
