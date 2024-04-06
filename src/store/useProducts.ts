import { create } from "zustand";
import { ProductType } from "../types/productType";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5555";

type State = {
  products: ProductType[];
  isLoading: boolean;
  cartNotify:boolean;
  error: string;
  isAddedToCart: string;
  selectedProduct: { id: string; img: string; title: string; price: number };
  clearCartNotify:()=>void
};

type Action = {
  fetch: () => Promise<any>;
  addToCartProduct: (id: string) => Promise<any>;
  sortPrice: (order: "high" | "low") => void;
};

const useProducts = create<State & Action>((set) => ({
  products: [],
  selectedProduct: {
    id: "",
    title: "",
    img: "",
    price: 0,
  },
  isLoading: true,
  error: "",
  isAddedToCart: "",
  cartNotify:false,
  sortPrice(order) {
    set({ isLoading: true });
    set((state) => ({
      products: state.products.sort((a, b) => {
        return order === "low" ? a.price - b.price : b.price - a.price;
      }),
    }));
    set({ isLoading: false });
  },
  async fetch() {
    try {
      const { data } = await axios.get("/products/get");
      if (data?.products) set({ isLoading: false, products: data?.products });
      console.log("fetching products");
    } catch (error) {
      set({ isLoading: false, error: "error occured" });
      console.log("failing to fetch the products using zustand");
    }
  },

  async addToCartProduct(id) {
    try {
      const token = localStorage.getItem("token");
      set({ isAddedToCart: id });
      if (token) {
        await axios.post("/carts/add", {
          token,
          productId: id,
        });
        set({ isAddedToCart: "" ,cartNotify:true});

      }
    } catch (error) {}
  },

  clearCartNotify(){
    set({cartNotify:false})
  }
}));

export default useProducts;
