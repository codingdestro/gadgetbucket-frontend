import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import useProducts from "../store/useProducts";
import { useEffect } from "react";

const PrivateRoute = () => {
  const fetchProducts = useProducts((state)=>state.fetch)

  useEffect(()=>{
fetchProducts()
  },[])
  const isAuthenticated = useLoaderData();
  return (
    <div>
      {isAuthenticated ? <Outlet /> : <Navigate to={"/account/signin"} />}
    </div>
  );
};

export default PrivateRoute;
