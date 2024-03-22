import { useState } from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
// import "../../styles/navbar.scss";
const paths = [
  {
    path: "/",
    tab: "home",
  },
  {
    path: "/cart",
    tab: "cart",
  },
  {
    path: "/order",
    tab: "order",
  },
];
const Navbar = () => {
  const location = useLocation();
  const [show, setShow] = useState(true);
  return (
    <>
      <section
        className="border flex flex-col ssm:flex-row 
      ssm:items-center justify-center ssm:justify-between p-5 border-b-2 mb-5 "
      >
        <div className="flex justify-between items-center ssm:block">
          <div className="text-2xl font-semibold tracking-wider italic">
            <h2>GadgetWorld</h2>
          </div>
          <div className="ssm:hidden">
            <span onClick={() => setShow((prev: boolean) => !prev)}>show</span>
          </div>
        </div>
        <div
          className={`flex flex-col ssm:flex-row  transition-all overflow-hidden items-center mt-2 ssm:mt-0 gap-5  ${
            show ? "show" : "hide"
          } `}
        >
          {paths.map(
            ({ path, tab }: { path: string; tab: string }, idx: number) => {
              return (
                <Link
                  to={path}
                  onClick={() => setShow((prev: boolean) => !prev)}
                  // className={`box `}
                  className={`flex items-center gap-2 
                  ${location.pathname === path ? " bg-accent text-white" : ""}
                  border px-4 py-1 rounded-lg`}
                  key={idx}
                >
                  <img
                    className="w-4 h-4"
                    src={`/assets/${tab}.png`}
                    alt="home"
                  />
                  <span className="text-lg capitalize">{tab}</span>
                </Link>
              );
            }
          )}
          <div className="border px-5 py-1 bg-sky-500 rounded-lg">
            <Link
              to={"account/signin"}
              onClick={() => localStorage.setItem("token", "")}
            >
              login
            </Link>
          </div>
        </div>
      </section>
      <section className="px-3 ">
        <Outlet />
      </section>
    </>
  );
};

export default Navbar;
