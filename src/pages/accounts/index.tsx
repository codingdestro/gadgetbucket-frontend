import { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";
const index = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const changeToggleLogin = () => setToggleLogin((prevState) => !prevState);
  return (
    <div className="field-container">
      {toggleLogin ? <Signin /> : <Login />}
      <div className="login-toggle" onClick={changeToggleLogin}>
        {toggleLogin ? "login" : "signin"}
      </div>
    </div>
  );
};

export default index;
