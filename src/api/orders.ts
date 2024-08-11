import axios from "axios";

const orders = {
  async get(token: string) {
    const { data } = await axios.post("/orders/get", {
      token,
    });
    return data;
  },
  async fetchOrderItems(cartToken: string) {
    const { data } = await axios.post("/orders/fetch", { cartToken });
    return data;
  },
};
export default orders;
