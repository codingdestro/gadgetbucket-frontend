import { create } from "zustand";
import { ProductType } from "../types/productType";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5555";

type State = {
  products: ProductType[];
  isLoading: boolean;
  error: string;
  isAddedToCart :string
};

type Action = {
  fetch: () => Promise<any>;
  addToCartProduct: (id: string) => Promise<any>;
};

const useProducts = create<State & Action>((set) => ({
  products: [],
  isLoading: true,
  error: "",
  isAddedToCart:"",
  async fetch() {
    try {
      const { data } = await axios.get("/products/get");
      if (data?.products) set({ isLoading: false, products: data?.products });
    } catch (error) {
      console.log("failing to fetch the products using zustand");
    }
  },

  async addToCartProduct(id) {
    try {
      const token = localStorage.getItem("token");
      set({isAddedToCart:id})
      if (token) {
        const { data } = await axios.post("/carts/add", {
          token,
          productId: id,
        });
      set({isAddedToCart:""})
      }
    } catch (error) {}
  },
}));

export default useProducts;
