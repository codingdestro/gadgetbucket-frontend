import axios from "axios";

type userSigninData = {
  name?: string;
  contact: string;
  password: string;
  address?: string;
};

axios.defaults.baseURL = "http://localhost:5555/account";

export const Signin = async (user: userSigninData) => {
  try {
    const res = await axios.post("signin", { ...user });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    } else {
      throw "faild login";
    }
  } catch (error) {
    console.log("error to signin user!");
  }
};
export const Login = async (user: userSigninData) => {
  try {
    const res = await axios.post("login", { ...user });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    } else {
      throw "faild login";
    }
  } catch (error) {
    console.log("error to login user!");
  }
};
