import api from "../../api";

const loader = async () => {
  let token = localStorage.getItem("token");
  try {
    if (token) {
      const { status, data } = await api.tokenAuth(token);
      return status === 200 ? (data.token ? true : false) : false;
    } else return false;
  } catch {
    return false;
  }
};
export default loader;
