import { create } from "zustand";
import { ProductType } from "../types/productType";
import api from "../api";
export type CartType = {
  id: string;
  product: ProductType;
  payment: number;
};
type State = {
  isLoading: boolean;
  error: string;
  cart: CartType[];
  payment: number;
};

type Action = {
  fetchCart: () => Promise<any>;
  deleteCartItem: (id: string) => Promise<any>;
};

const useCart = create<State & Action>((set) => ({
  isLoading: true,
  error: "",
  cart: [],
  payment: 0,
  async fetchCart() {
    set({ error: "", isLoading: true });
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        set({ error: "Empty token", isLoading: false });
        return;
      }
      const data = await api.cart.get(token);
      console.log(data);
      set({
        isLoading: false,
        error: "",
        cart: data?.carts,
        payment: data?.payment,
      });
    } catch (error) {
      console.log("failed to fetch user cart");
    }
  },

  async deleteCartItem(id) {
    try {
      const token = localStorage.getItem("token") || "";
      const data = await api.cart.delete(token, id);
      if (data.msg) {
        let price = 0;
        set((state) => ({
          cart: state.cart.filter((item: CartType) => {
            if (item.id !== id) {
              price = item.product.price;
              return true;
            } else false;
          }),
          payment: state.payment - price,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCart;
