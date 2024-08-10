import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Menu from "./Menu";
import MenuBar from "./Menubar";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prev: boolean) => !prev);

  return (
    <>
      <section className="fixed bg-white top-0 left-0 w-full flex justify-between px-3 py-2 items-center border z-30">
        <div className=" font-semibold tracking-wider italic">
          <Link to={"/"}>gadgetBucket</Link>
        </div>

        <div className="md:hidden cursor-pointer border p-1 rounded-full">
          <span onClick={toggleShow}>
            <img src="/assets/user.png" width={30} alt="" />
          </span>
        </div>

        <div className="hidden md:flex gap-3">
          <div className="flex gap-x-3">
            <Menu path="/" tab="home" />
            <Menu path="/cart" tab="cart" />
            <Menu path="/order" tab="order" />
          </div>
          <LogoutButton />
        </div>
      </section>

      <MenuBar isOpen={show} toggle={toggleShow} />

      <section className="mt-20 ">
        <Outlet />
      </section>
    </>
  );
};

export default Navbar;

//<div
//            className={`flex flex-row  transition-all overflow-hidden items-center mt-2 ssm:mt-0 gap-5  ${show ? "show" : "hide"
//              } `}
//          >
//            <Menu path="/" onclickHandler={toggleShow} tab="home" show={true} />
//            <Menu
//              onclickHandler={toggleShow}
//              path="/cart"
//              tab="cart"
//              show={false}
//            />
//            <Menu
//              path="/order"
//              tab="order"
//              onclickHandler={toggleShow}
//              show={false}
//            />
//            <div className="border px-5 py-1 bg-sky-500 rounded-lg">
//              <Link
//                to={"account/signin"}
//                onClick={() => localStorage.removeItem("token")}
//              >
//                logout
//              </Link>
//            </div>
//          </div>
