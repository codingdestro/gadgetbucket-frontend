import { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";
const index = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const changeToggleLogin = () => setToggleLogin((prevState) => !prevState);
  return (
    <div className="field-container">
      <header>e-comm {toggleLogin ? "signin" : "login"}</header>
      {toggleLogin ? <Signin /> : <Login />}
      <div className="toggle-link" onClick={changeToggleLogin}>
        {toggleLogin
          ? "already have an account login"
          : "don't have any accout signin"}
      </div>
    </div>
  );
};

export default index;
