import { useState } from "react";
import useCart from "../../store/useCarts";
import InputForm, {
  InputBoxText,
  SubmitButton,
  useFieldState,
} from "../inputFields";
import api from "../../api";
import { useNavigate } from "react-router";
import Alert, { useShow } from "../status/Alert";

const CartCheckout = () => {
  const { payment } = useCart();
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const { state, setInputValues } = useFieldState({ address: "", contact: "" });
  const alertButton = useShow();
  const redirect = useNavigate();

  const handleSubmit = async () => {
    const token = localStorage.getItem("token") || "";
    try {
      if (
        state.address &&
        state.contact &&
        state.contact.length === 10 &&
        !disable
      ) {
        setDisable(true);
        const data = await api.cart.order(token, state.address, state.contact);
        setShow(false);
        if (data.msg) redirect("/");
        return;
      }
      alertButton.showTrigger();
    } catch (error) {
      setDisable(false);
      alertButton.showTrigger();
    }
  };
  return (
    <>
      {show && (
        <div className=" absolute top-[0] flex items-center justify-center w-full h-full backdrop-blur-sm ">
          <Alert show={alertButton.show} msg="invalid input" />
          <div className="">
            <InputForm heading="checkout order">
              <InputBoxText handleOnchange={setInputValues} name="address" />
              <InputBoxText
                handleOnchange={setInputValues}
                name="contact"
                type="number"
              />
              <SubmitButton onSubmit={handleSubmit}>
                {disable ? "loading..." : "confirm"}
              </SubmitButton>
              <button
                className="shadow-sm rounded-3xl p-2 cancelled"
                onClick={() => setShow(false)}
              >
                close
              </button>
            </InputForm>
          </div>
        </div>
      )}
      <div
        className=" bottom-11 bg-white w-[400px] flex items-center justify-between p-5 border 
       rounded-lg shadow-md
      "
      >
        <p className=" capitalize my-5 tracking-wide">
          payment : ₹ {payment.toLocaleString("en-IN")}
        </p>
        <button
          className="px-4  py-2 bg-blue-300 rounded-lg text-blue-700"
          onClick={() => setShow(true)}
        >
          checkout
        </button>
      </div>
    </>
  );
};

export default CartCheckout;
