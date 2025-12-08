import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./components/Home.jsx";
import FindParthner from "./components/FindParthner.jsx";
import CreatePartner from "./components/CreatePartner.jsx";
import Register from "./components/Register.jsx";
import LogIn from "./components/LogIn.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import ViewDeatails from "./components/ViewDeatails.jsx";
import PrivetRoute from "./privetroutes/PrivetRoute.jsx";
import MyCollaction from "./components/MyCollaction.jsx";
import UpdateRequser from "./components/UpdateRequser.jsx";
import Profile from "./components/Profile.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
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
        element: <FindParthner>\</FindParthner>,
      },
      {
        path: "/createPartnerProfile",
        element: (
          <PrivetRoute>
            {" "}
            <CreatePartner></CreatePartner>
          </PrivetRoute>
        ),
      },
      { path: "/Register", Component: Register },
      {
        path: "login",
        Component: LogIn,
      },
      {
        path: "/viewDeatails/:id",
        element: (
          <PrivetRoute>
            <ViewDeatails></ViewDeatails>
          </PrivetRoute>
        ),
      },
      {
        path: "myCollection",
        element: (
          <PrivetRoute>
            <MyCollaction></MyCollaction>
          </PrivetRoute>
        ),
      },
      {
        path: "updateRequest/:id",
        element: (
          <PrivetRoute>
            {" "}
            <UpdateRequser></UpdateRequser>
          </PrivetRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
