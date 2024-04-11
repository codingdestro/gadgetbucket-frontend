import axios from "axios";
const products = {
  async get() {
    const { data } = await axios.post("/products/get");
    return data;
  },

  async add(token: string, productId: string) {
    const { data } = await axios.post("/carts/add", {
      token,
      productId,
    });
    return data;
  },

  async makeOrder(
    token: string,
    address: string,
    contact: string,
    productId: string
  ) {
    const { data } = await axios.post("/orders/make", {
      address,
      contact,
      token,
      productId,
    });
    return data;
  },
};

export default products;
