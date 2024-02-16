import { useState } from "react";

type Props = {
  value: string;
  changeValue: (e: string) => void;
};

const PasswordField = ({ value, changeValue }: Props) => {
  const [toggle, setToggle] = useState(false);

  const togglePassword = () => setToggle((prevState) => !prevState);
  return (
    <div className="password-box">
      <input
        type={toggle ? "text" : "password"}
        name=""
        id=" "
        value={value}
        placeholder="password"
        onChange={(e) => changeValue(e.target.value)}
      />
      <div className={toggle ? "show" : "hide"} onClick={togglePassword} />
    </div>
  );
};

export default PasswordField;
