import { Link } from "react-router-dom";
const LogoutButton = () => {
  return (
    <>
      <Link
        className="px-4 mx-1 text-center flex-1 rounded-lg py-1 text-sm md:ext-md bg-blue-300 flex justify-center items-center"
        to={"account/signin"}
        onClick={() => localStorage.removeItem("token")}
      >
        logout
      </Link>
    </>
  );
};

export default LogoutButton;
