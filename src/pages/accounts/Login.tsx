import { Link, useNavigate } from "react-router-dom";
import
  InputForm,
{
  InputBoxText,
  SubmitButton,
  useFieldState,
} from "../../components/inputFields";
import api from "../../api";

const Home = () => {
  const { state, setInputValues } = useFieldState({ password: "", email: "" });
  const redirect = useNavigate();

  const loginUser = async () => {
    if (await api.sign.login(state)) redirect("/");
  };
  return (
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
      <SubmitButton onSubmit={loginUser}>login</SubmitButton>
      <div className="text-center mt-2 bottom-5">
        <Link
          to={"../signin"}
          className="italic text-sm text-violet-700 underline"
        >
          {"don't have any accout signin"}
        </Link>
      </div>
    </InputForm>
  );
};

export default Home;
