import { authenticateToken } from "../../services/authenticate";
const loader = async () => {
  let token = localStorage.getItem("token") || "";
  if (token) {
    try {
      const res = await authenticateToken(token);
      return res.token  ? true : false;
    } catch {
      return false;
    }
  } else {
    return false;
  }
};
export default loader;
