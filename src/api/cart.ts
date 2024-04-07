import axios from "axios";

const cart = {
  async get(token: string) {
    const { data } = await axios.post("/carts/get", {
      token,
    });
    return data;
  },
  async delete(token: string, cartId: string) {
    const { data } = await axios.delete("/carts/remove", {
      data: {
        token,
        cartId,
      },
    });
    return data;
  },

  async order(token: string, address: string, contact: string) {
    const { data } = await axios.post("/carts/checkout", {
      token,
      address,
      contact,
    });
    return data;
  },
};

export default cart;
