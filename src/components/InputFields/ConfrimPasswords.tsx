import { useState } from "react";
type Props = {
  value: string;
  changePassword: (e: string) => void;
};
const ConfirmPasswords = ({ value, changePassword }: Props) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matched, setMatched] = useState(false);
  const changeConfirmPassword = (val: string) => {
    setConfirmPassword(val);
    setMatched(val === value);
  };
  return (
    <div className={`confirm-password-box ${matched ? "matched" : ""}`}>
      <input
        type="password"
        placeholder="password"
        value={value}
        onChange={(e) => changePassword(e.target.value)}
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => changeConfirmPassword(e.target.value)}
        placeholder="confirm password"
      />
    </div>
  );
};

export default ConfirmPasswords;
