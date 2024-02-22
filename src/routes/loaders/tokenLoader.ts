import { authenticateToken } from "../../services/authenticate";
const loader = () => {
  const token = localStorage.getItem("token") || "";
  authenticateToken(token).then((res: any) => {
    console.log(res);
  });
  return token ? true : false;
};
export default loader;
