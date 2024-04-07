import axios from "axios";
import products from "./products";
import cart from "./cart";
import sign from "./signin";
import orders from "./orders";

// axios.defaults.baseURL = "http://localhost:5555";
axios.defaults.baseURL = "http://192.168.1.72:5555";
const api = {
  products,
  cart,
  orders,
  sign,

  async validateProduct(id: string) {
    const { data } = await axios.post("/validate/product/id", { id });
    return data;
  },

  async tokenAuth(token: string) {
    const { status, data } = await axios.post("account/authenticate", {
      token,
    });
    return { status, data };
  },
};

export default api;
