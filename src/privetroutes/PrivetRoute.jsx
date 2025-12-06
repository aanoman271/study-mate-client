import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hook/useAuth";
import Loading from "../components/Loading";

const PrivetRoute = ({ isAuthenticated, children }) => {
  const { user, loadding } = useAuth();
  const location = useLocation();
  console.log(user);
  if (loadding) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return isAuthenticated && children;
};

export default PrivetRoute;
