import { useEffect, useState } from "react";
import InputForm, {
  InputBoxText,
  SubmitButton,
  useFieldState,
} from "../components/inputFields";
import Alert, { useShow } from "../components/status/Alert";
import { useNavigate, useParams } from "react-router";
import { useAuthId } from "../services/authId";
import Error from "./Error";
import api from "../api";
const MakeOrder = () => {
  const { show, showTrigger } = useShow();
  const { state, setInputValues } = useFieldState({ address: "", contact: "" });
  const [message, setMessage] = useState("");
  const params = useParams();
  const redirect = useNavigate();
  const { valid, validate, data } = useAuthId();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const { Id } = params;
    !Id ? redirect("/") : validate(Id);
  }, []);

  const makeOrder = async () => {
    try {
      setDisable(true);
      const token = localStorage.getItem("token");
      const id = params.Id;
      if (!id || !token) {
        setDisable(false);
        return;
      }
      const data = await api.products.makeOrder(
        token,
        state.address,
        state.contact,
        id
      );
      setDisable(false);
      if (data.msg == "order completed") redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  const submitOrder = () => {
    if (state.contact && state.address) {
      if (state.contact.length === 10) {
        makeOrder();
        return;
      } else setMessage("invalid contact no.");
    } else setMessage("please fill info");
    showTrigger();
  };

  return !valid ? (
    <>
      <div>
        <Error message="Invalid item"></Error>
      </div>
    </>
  ) : (
    <section className="w-full mt-24 flex items-center justify-center">
      <Alert show={show} msg={message} />
      <InputForm heading="Order Form">
        <InputBoxText
          name="address"
          placeholder="enter your address"
          handleOnchange={setInputValues}
        />
        <InputBoxText
          name="contact"
          type="number"
          placeholder="enter your contact no."
          handleOnchange={setInputValues}
        />
        <div className="w-full flex justify-between bg-gray-100  px-2 py-1 rounded-3xl items-center">
          <h2 className="text-slate-500">cash on delivery</h2>
          <p className="flex items-center gap-2 ">
            <span className="text-sm">total :</span>
            <span className="font-[600] italic">{data}</span>
          </p>
        </div>
        <SubmitButton onSubmit={() => !disable && submitOrder()}>
          confirm order
        </SubmitButton>
      </InputForm>
    </section>
  );
};

export default MakeOrder;
