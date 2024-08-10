import { Link, useLocation } from "react-router-dom";

interface Props {
  path: string;
  tab: string;
  onclickHandler?: () => void;
}
const Menu = ({ path, tab, onclickHandler }: Props) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      onClick={onclickHandler}
      // className={`box `}
      className={`flex items-center gap-2 
                  ${pathname === path ? " bg-accent text-white" : ""}
                  border px-4 py-1 rounded-lg`}
    >
      <img className="w-4 h-4" src={`/assets/${tab}.png`} alt="home" />
      <span className="text-sm md:text-md capitalize">{tab}</span>
    </Link>
  );
};

export default Menu;
