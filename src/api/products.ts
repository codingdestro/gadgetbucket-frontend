import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "http://localhost:5555";

export interface ProductType {
  id: string;
  title: string;
  img: string;
  price: number;
  textPrice: string;
  category: string;
  subCategory: string;
}

export const getAllProducts = async () => {
  try {
    const res = await axios.get("/products/get/products?offset=0&limit=100");
    if (res.data.msg) return res.data;
    else throw res.data.err;
  } catch (error) {
    console.log(error);
  }
};

export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, _] = useState("");
  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res: { msg: string; products: ProductType[] } =
          await getAllProducts();
        setLoading(false);
        setData(res.products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);
  return [loading, error, data];
};
