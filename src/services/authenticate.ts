import axios, { AxiosInstance } from "axios";

const fetcher: AxiosInstance = axios.create({
  baseURL: "http://localhost:5555/",
});

export const authenticateToken = async (token: string) => {
  try {
    if (token === "") return false;
    const res = await fetcher.post("/account/authenticate", {
      token,
    });
    if (res.status === 200) return res.data;
  } catch (error) {
    throw error;
  }
};
