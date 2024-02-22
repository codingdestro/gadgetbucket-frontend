import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Error } from "../components/messageTags";
import Account from "../pages/accounts";
import "../styles/index.scss";
import Navbar from "../components/header/Navbar";
import PrivateRoute from "./PrivateRoute";
import TokenLoader from "./loaders/tokenLoader";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" loader={TokenLoader} element={<PrivateRoute />}>
        <Route element={<Navbar />}>
          <Route path="home" element={<div>welcome to home</div>} />
          <Route path="" element={<div>welcome to home</div>} />
          <Route path="cart" element={<div>welcome to cart</div>} />
          <Route path="order" element={<div>welcome to order</div>} />
        </Route>
      </Route>
      <Route path="/account">
        <Route path="signin" element={<Account />} />
      </Route>
      <Route
        path="*"
        element={<Error message="404 .⌤. page not found" />}
      ></Route>
    </Route>
  )
);

export default route;
