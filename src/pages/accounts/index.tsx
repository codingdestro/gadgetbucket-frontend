import { Navigate, useLoaderData, Outlet } from "react-router";
const index = () => {
  const isAuthenticated = useLoaderData();

  console.log(isAuthenticated);
  return isAuthenticated ? (
    <Navigate to={"/"} />
  ) : (
    <div className="field-container">
      <Outlet />
    </div>
  );
};

export default index;
