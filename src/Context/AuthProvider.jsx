import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../fireBaseConfiq/fireBaseConfiq";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loadding, setloadding] = useState(true);
  // signIn with Google
  const googleSignIn = () => {
    signInWithPopup(auth, provider);
  };
  // create user with email
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signin with email
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // UserManage

  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloadding(false);
      console.log("current userInfo", currentUser || "empty");
    });
    return unsubsCribe;
  }, []);
  const value = { user, loadding, setUser, signInUser, createUser, signInUser };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
