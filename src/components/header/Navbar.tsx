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
  return (
    <>
      <section className="border flex items-center justify-between p-5 border-b-2 mb-5">
        <div className="text-2xl font-semibold tracking-wider italic">
          <h2>GadgetWorld</h2>
        </div>
        <div className="flex items-center gap-5  ">
          {paths.map(
            ({ path, tab }: { path: string; tab: string }, idx: number) => {
              return (
                <Link
                  to={path}
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
          <div className="login-button">
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
