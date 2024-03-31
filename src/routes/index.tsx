import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Account from "../pages/accounts";
import Navbar from "../components/header/Navbar";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import TokenLoader from "./loaders/tokenLoader";
import Home from "../pages/home";
import Signin from "../pages/accounts/Signin";
import Login from "../pages/accounts/Login";
import Cart from "../pages/Cart";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route loader={TokenLoader} element={<PrivateRoute />}>
      <Route element={<Navbar />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<div>welcome to order</div>} />
      </Route>
      </Route>
      <Route path="/account" loader={TokenLoader} element={<Account />}>
        <Route path="signin" Component={Signin} />
        <Route path="login" Component={Login} />
      </Route>
      <Route
        path="*"
        element={<Error message="sorry page not found!" />}
      ></Route>
    </Route>
  )
);

export default route;
