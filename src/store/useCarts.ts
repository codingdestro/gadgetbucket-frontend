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
  deleteCartItem: (id: string) => Promise<any>;
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
      set({ isLoading: false, error: "", cart: data?.carts });
    } catch (error) {
      console.log("failed to fetch user cart");
    }
  },

  async deleteCartItem(id) {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.delete("/carts/remove", {
        data: {
          token,
          cartId: id,
        },
      });
      if (data.msg) {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCart;
