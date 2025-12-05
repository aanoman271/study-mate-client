import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";
import Loading from "../components/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loadding } = useContext(AuthContext);
  if (loadding) {
    return <Loading></Loading>;
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivetRoute;
