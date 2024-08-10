import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Menu from "./Menu";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prev: boolean) => !prev);

  return (
    <div className="flex flex-col items-enter justify-between">
      <section
        className="border flex flex-col ssm:flex-row   
      ssm:items-center justify-between ssm:justify-between py-2 px-5 mb-5 border-b-2  "
      >
        <div className="flex justify-between items-center ssm:block">
          <div className="text-md font-semibold tracking-wider italic">
            <Link to={"/"}>
              <div className="flex text-md items-center">
                <span>Gadget Bucket</span>
              </div>
            </Link>
          </div>

          <div className="ssm:hidden cursor-pointer">
            <span onClick={toggleShow}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/12596/12596938.png"
                width={32}
                alt=""
              />
            </span>
          </div>
        </div>
        <div
          className={`flex flex-col ssm:flex-row  transition-all overflow-hidden items-center mt-2 ssm:mt-0 gap-5  ${
            show ? "show" : "hide"
          } `}
        >
          <Menu path="/" onclickHandler={toggleShow} tab="home" show={true} />
          <Menu
            onclickHandler={toggleShow}
            path="/cart"
            tab="cart"
            show={false}
          />
          <Menu
            path="/order"
            tab="order"
            onclickHandler={toggleShow}
            show={false}
          />
          <div className="border px-5 py-1 bg-sky-500 rounded-lg">
            <Link
              to={"account/signin"}
              onClick={() => localStorage.removeItem("token")}
            >
              logout
            </Link>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center ">
        <Outlet />
      </section>
    </div>
  );
};

export default Navbar;
