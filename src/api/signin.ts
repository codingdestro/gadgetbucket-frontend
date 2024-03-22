import axios from "axios";

export type userSigninData = {
  name: string;
  email: string;
  password: string;
};

axios.defaults.baseURL = "http://localhost:5555/";

export const Signin = async (user: userSigninData) => {
  try {
    const res = await axios.post("/account/signin", { ...user });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      return true;
    } else {
      throw "faild login";
    }
  } catch (error) {
    console.log("error to signin user!");
    return false;
  }
};
export const Login = async (user: { password: string; email: string }) => {
  try {
    const res = await axios.post("/account/login", { ...user });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      return true;
    } else {
      throw "faild login";
    }
  } catch (error) {
    console.log("error to login user!");
    return false;
  }
};
