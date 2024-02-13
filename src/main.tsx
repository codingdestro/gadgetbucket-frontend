import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles/index.css"

const route = createBrowserRouter([
  {
    path: "",
    element: <div className="box">this is new route</div>,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
);
