import { useState } from "react";
import InputFieldCard, { fieldsType } from "../../components/InputFieldCard";

const Home = () => {
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
        <div className="field-card ">
          <InputFieldCard field={fields} onChangeValue={changeValue} />
        </div>
    </>
  );
};

export default Home;
