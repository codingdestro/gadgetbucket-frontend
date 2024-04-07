import axios from "axios";
import { userSigninData } from "../types/userTypes";
const sign = {
  async signin(user: userSigninData) {
    try {
      const res = await axios.post("/account/signin", { ...user });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  },
  async login(user: { password: string; email: string }) {
    try {
      const res = await axios.post("/account/login", { ...user });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  },
};

export default sign;
