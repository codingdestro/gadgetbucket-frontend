import { Navigate, Outlet, useLoaderData } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = useLoaderData();
  console.log(isAuthenticated);
  return (
    <div>
      {isAuthenticated ? <Outlet /> : <Navigate to={"/account/signin"} />}
    </div>
  );
};

export default PrivateRoute;
