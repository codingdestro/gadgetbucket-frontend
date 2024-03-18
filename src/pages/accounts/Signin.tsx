import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FieldsType } from "./Login";

const Home = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string[]>(["", ""]);
  const [match, setMatch] = useState(false);
  const [fields, setFields] = useState<FieldsType[]>([
    {
      value: "",
      name: "name",
    },
    {
      value: "",
      name: "email",
    },
  ]);

  const onChangeSetFields = (value: string, id: number) => {
    setFields((prev: FieldsType[]) =>
      prev.map((ele: FieldsType, idx: number) => {
        if (idx === id) ele.value = value;
        return ele;
      })
    );
  };

  const onChangeSetPassword = (value: string, id: number) => {
    setPassword((prev: string[]) => {
      let data = prev.map((e: string, idx: number) => (idx === id ? value : e));

      if (data[0] && data[1]) setMatch(data[0] == data[1] ? true : false);

      return data;
    });
  };

  return (
    <>
      <section className="border w-[350px] min-h-[600px] gap-10 p-5  flex flex-col items-center justify-between shadow-md rounded-3xl relative ">
        <h1 className="text-3xl capitalize font-[500]">sign in</h1>
        <div className="w-full flex flex-col gap-7  ">
          {fields.map((ele: FieldsType, idx: number) => (
            <div className="flex flex-col w-full " key={idx}>
              <span className="bg-white capitalize">{ele.name}</span>

              <div className="relative bg-green0">
                <input
                  type="text"
                  className="p-2 mt-3 w-full border-b bg-transparent outline-none "
                  placeholder={`please type your ${ele.name}`}
                  value={ele.value}
                  onChange={(e) => onChangeSetFields(e.target.value, idx)}
                />
              </div>
            </div>
          ))}

          <div className="flex flex-col w-full ">
            <span className="bg-white capitalize">Password</span>
            <div className=" " data-placeholder="test">
              <input
                type="password"
                className={`p-2 mt-3 w-full border-b bg-transparent outline-none ${
                  match || "border-red-500"
                }`}
                placeholder="Enter your password"
                value={password[0]}
                onChange={(e) => onChangeSetPassword(e.target.value, 0)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full ">
            <span className="bg-white capitalize">Confirm Password</span>
            <div className=" " data-placeholder="test">
              <input
                type="password"
                className={`p-2 mt-3 w-full border-b bg-transparent outline-none ${
                  match || "border-red-500"
                }`}
                placeholder="Enter your password"
                value={password[1]}
                onChange={(e) => onChangeSetPassword(e.target.value, 1)}
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <button className="w-full click py-2 border flex justify-center items-center rounded-3xl bg-gradient-to-r to-sky-400 from-pink-400 text-white capitalize">
            signin
          </button>
          <div className=" text-center mt-2 bottom-5">
            <Link
              to={"../login"}
              className="italic text-sm text-violet-700 underline"
            >
              {"have already an accout login"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
