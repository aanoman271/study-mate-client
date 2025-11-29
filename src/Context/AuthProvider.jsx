import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const value = {};
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
