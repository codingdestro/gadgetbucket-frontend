import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Account from "./pages/accounts";
import App from "./App";
import "./styles/index.scss";

const route = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "account",
    children: [{ path: "signin", element: <Account /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
