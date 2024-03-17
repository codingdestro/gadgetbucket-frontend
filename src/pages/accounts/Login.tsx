import { useState } from "react";
import { Link } from "react-router-dom";
import InputFieldCard, {
  fieldsType,
} from "../../components/InputFields/InputFieldCard";
import { Login } from "../../api/signin";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const [fields, setFields] = useState<fieldsType[]>([
    {
      type: "number",
      value: "",
      name: "contact",
    },
    {
      type: "password",
      value: "",
      name: "create password",
    },
  ]);
  const changeValue = (val: string, idx: number) => {
    setFields((prevState: fieldsType[]) => {
      return prevState.map((ele: fieldsType, i: number) => {
        if (i === idx) {
          ele.value = val;
        }
        return ele;
      });
    });
  };
  return (
    <>
      <header>e-comm login</header>
      <div className="field-card ">
        <InputFieldCard field={fields} onChangeValue={changeValue} />
        <button className="login-button"
          onClick={() => {
            Login({
              contact: fields[0].value,
              password: fields[1].value,
            }).then(() => navigate("/"));
          }}
        >
          login
        </button>
      </div>
      <Link to={"../signin"} className="toggle-link">
        {"don't have any accout signin"}
      </Link>
    </>
  );
};

export default Home;
