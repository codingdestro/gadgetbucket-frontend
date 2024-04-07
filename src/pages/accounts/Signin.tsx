import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert, { useShow } from "../../components/status/Alert";
import InputForm, {
  InputBoxText,
  SubmitButton,
  useFieldState,
} from "../../components/inputFields";
import api from "../../api";

const Home = () => {
  const redirect = useNavigate();
  const [password, setPassword] = useState<string[]>(["", ""]);
  const [match, setMatch] = useState(false);
  const { state, setInputValues } = useFieldState({ name: "", email: "" });

  const [disable, setDisable] = useState(false);
  const { show, showTrigger } = useShow();
  const [message, setMessage] = useState("");
  const onChangeSetPassword = (value: string, id: number) => {
    setPassword((prev: string[]) => {
      let data = prev.map((e: string, idx: number) => (idx === id ? value : e));

      if (data[0] && data[1]) setMatch(data[0] == data[1] ? true : false);

      return data;
    });
  };

  const signinUser = async () => {
    setDisable(true);
    try {
      const data = await api.sign.signin({
        ...state,
        password: password[0],
      });
      if (data.msg === "new user created") {
        setDisable(false);
        redirect("/");
      } else {
        setMessage(data.err || data.msg);
        showTrigger();
        setDisable(false);
      }
    } catch {
      setMessage("failed to login");
      showTrigger();
      setDisable(false);
    }
  };

  return (
    <section>
      <Alert show={show} msg={message} />
      <InputForm heading="Sign In">
        <InputBoxText
          name="name"
          placeholder="enter your name"
          handleOnchange={(e) => setInputValues(e)}
        />
        <InputBoxText
          name="email"
          placeholder="enter your email"
          handleOnchange={(e) => setInputValues(e)}
        />
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

        <SubmitButton disable={disable} onSubmit={signinUser}>
          signIn
        </SubmitButton>
        <div className="text-center mt-2 bottom-5">
          <Link
            to={"../login"}
            className="italic text-sm text-violet-700 underline"
          >
            {"have already an accout login"}
          </Link>
        </div>
      </InputForm>
    </section>
  );
};

export default Home;
