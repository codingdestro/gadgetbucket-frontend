import { create } from "zustand";
import axios from "axios";
import { ProductType } from "../types/productType";

type State = {
  isLoading: boolean;
  error: string;
  cart: ProductType[];
};

type Action = {
  fetchCart: () => Promise<any>;
};

const useCart = create<State & Action>((set) => ({
  isLoading: true,
  error: "",
  cart: [],
  async fetchCart() {
    set({ error: "", isLoading: true });
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        set({ error: "Empty token", isLoading: false });
        return;
      }
      const { data } = await axios.post("/carts/get", {
        token,
      });
      if (data?.carts?.length === 0) {
        set({ isLoading: false, error: "cart is empty", cart: [] });
        return;
      }
      set({ isLoading: false, error: "", cart: data?.carts });
    } catch (error) {
      console.log("failed to fetch user cart");
    }
  },
}));

export default useCart;
