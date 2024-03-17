import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputFieldCard, {
  fieldsType,
} from "../../components/InputFields/InputFieldCard";
import { Signin } from "../../api/signin";

const Home = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState<fieldsType[]>([
    {
      type: "text",
      value: "mohd anas",
      name: "name",
    },
    {
      type: "number",
      value: "",
      name: "contact",
    },
    {
      type: "text",
      value: "",
      name: "address",
    },
    {
      type: "confirmPassword",
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
      <header>e-comm signin</header>
      <div className="field-card  ">
        <InputFieldCard field={fields} onChangeValue={changeValue} />
        <button
          className="login-button"
          onClick={() => {
            Signin({
              name: fields[0].value,
              contact: fields[1].value,
              password: fields[2].value,
              address: fields[3].value,
            }).then(() => navigate("/"));
          }}
        >
          signin
        </button>
      </div>
      <Link to={"../login"} className="toggle-link ">
        already have an account login
      </Link>
    </>
  );
};

export default Home;
