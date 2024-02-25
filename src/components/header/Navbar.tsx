import { useLocation, Outlet, Link } from "react-router-dom";
import "../../styles/navbar.scss";
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
      <section>
        {paths.map(
          ({ path, tab }: { path: string; tab: string }, idx: number) => {
            return (
              <Link
                to={path}
                className={`box ${location.pathname === path ? "active" : ""}`}
                key={idx}
              >
                <img src={`/assets/${tab}.png`} alt="home" />
                <span>{tab}</span>
              </Link>
            );
          }
        )}
        <div className="login-button">
          <Link to={"account/signin"}>login</Link>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Navbar;
