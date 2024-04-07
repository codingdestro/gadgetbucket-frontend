import axios from "axios";
import { userSigninData } from "../types/userTypes";
const sign = {
  async signin(user: userSigninData) {
    try {
      const res = await axios.post("/account/signin", { ...user });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        return res.data;
      }
      return res.data;
    } catch (error) {
      return "failed to signin";
    }
  },
  async login(user: { password: string; email: string }) {
    try {
      const res = await axios.post("/account/login", { ...user });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        return res.data;
      }
      return res.data;
    } catch (error) {
      return "failed to login";
    }
  },
};

export default sign;
