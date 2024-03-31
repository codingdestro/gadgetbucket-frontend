import axios from "axios";

import { userSigninData } from "../types/userTypes";

// axios.defaults.baseURL = "http://localhost:5555/";

export const Signin = async (user: userSigninData) => {
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
};
export const Login = async (user: { password: string; email: string }) => {
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
};
