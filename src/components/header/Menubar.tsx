import Menu from "./Menu";
import LogoutButton from "./LogoutButton";

const MenuBar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <section
      className={`fixed md:hidden top-5 right-0 w-full ${isOpen ? "active" : ""} menubar-open h-screen flex justify-end z-20 `}
    >
      <div className="w-[1000%] bg-white grid place-items-center ">
        <div className="flex flex-col  gap-y-3">
          <Menu path="/" tab={"home"} onclickHandler={toggle} />
          <Menu path="/cart" tab={"cart"} onclickHandler={toggle} />
          <Menu path="/order" tab={"order"} onclickHandler={toggle} />
          <LogoutButton />
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
