import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root.jsx";
import Home from "./components/Home.jsx";
import FindParthner from "./components/FindParthner.jsx";
import CreatePartner from "./components/CreatePartner.jsx";
import Register from "./components/Register.jsx";
import LogIn from "./components/LogIn.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/findPartner",
        Component: FindParthner,
      },
      {
        path: "/createPartnerProfile",
        element: <CreatePartner></CreatePartner>,
      },
      { path: "/Register", Component: Register },
      {
        path: "login",
        Component: LogIn,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
