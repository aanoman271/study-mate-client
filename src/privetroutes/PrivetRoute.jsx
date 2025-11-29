import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, loadding } = useContext(AuthContext);
  if (loadding) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="login"></Navigate>;
};

export default PrivetRoute;
