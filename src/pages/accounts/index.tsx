import { Navigate, useLoaderData, Outlet } from "react-router";
const index = () => {
  const isAuthenticated = useLoaderData();

  return isAuthenticated ? (
    <Navigate to={"/"} />
  ) : (
    <div className="w-full h-svh flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default index;
