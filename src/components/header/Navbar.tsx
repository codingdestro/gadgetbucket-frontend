import { useLocation, Outlet, Link } from "react-router-dom";
import "../../styles/navbar.scss";
const paths = ["home", "cart", "order"];
const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <section>
        {paths.map((ele: string, idx: number) => {
          return (
            <Link
              to={ele}
              className={`box ${location.pathname === "/" + ele && "active"}`}
              key={idx}
            >
              <img src={`/assets/${ele}.png`} alt="home" />
              <span>{ele}</span>
            </Link>
          );
        })}
      </section>
      <Outlet />
    </>
  );
};

export default Navbar;
