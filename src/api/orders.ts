import axios from "axios";

const orders = {
  async get(token: string) {
    const { data } = await axios.post("/orders/get", {
      token,
    });
    return data;
  },
};
export default orders;
