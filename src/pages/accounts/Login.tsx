import { Link, useNavigate } from "react-router-dom";
import InputForm, {
  InputBoxText,
  SubmitButton,
  useFieldState,
} from "../../components/inputFields";
import api from "../../api";
import { useState } from "react";
import Alert, { useShow } from "../../components/status/Alert";

const Home = () => {
  const { state, setInputValues } = useFieldState({ password: "", email: "" });
  const [disable, setDisable] = useState(false);
  const { show, showTrigger } = useShow();
  const [message, setMessage] = useState("");
  const redirect = useNavigate();

  const loginUser = async () => {
    setDisable(true);
    try {
      const data = await api.sign.login({ ...state });
      if (data.msg === "logged in") {
        setDisable(false);
        redirect("/");
      } else {
        setMessage(data?.err);
        showTrigger();
        setDisable(false);
      }
    } catch (error) {
      setMessage("failed to login");
      showTrigger();
      setDisable(false);
    }
  };
  return (
    <section>
      <Alert show={show} msg={message} />
      <InputForm heading="Login">
        <InputBoxText
          name="email"
          placeholder="enter your email"
          handleOnchange={(e) => setInputValues(e)}
        />
        <InputBoxText
          name="password"
          placeholder="enter password"
          handleOnchange={(e) => setInputValues(e)}
          type="password"
        />
        <SubmitButton disable={disable} onSubmit={loginUser}>
          login
        </SubmitButton>
        <div className="text-center mt-2 bottom-5">
          <Link
            to={"../signin"}
            className="italic text-sm text-violet-700 underline"
          >
            {"don't have any accout signin"}
          </Link>
        </div>
      </InputForm>
    </section>
  );
};

export default Home;
