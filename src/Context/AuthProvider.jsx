import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../fireBaseConfiq/fireBaseConfiq";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadding, setloadding] = useState(true);
  const [partnerData, setPartnerData] = useState([]);
  const provider = new GoogleAuthProvider();

  // signIn with Google
  const googleSignIn = () => {
    setloadding(true);
    return signInWithPopup(auth, provider);
  };
  // create user with email
  const createUser = async (email, password, name, photoURL) => {
    setloadding(true);

    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    await updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    });
    setUser({ ...user });
    return result;
  };
  // update
  // const updateProfile = (user, userName, photoURL);
  // updateProfile(user, {
  //   displayName: userName,
  //   photoURL: photoURL,
  // });
  // signin with email
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // UserManage

  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setloadding(false);
      console.log("current userInfo", currentUser || "empty");

      setUser(currentUser);
    });

    return () => unsubsCribe();
  }, []);

  const authInfo = {
    user,
    loadding,
    setloadding,
    partnerData,
    setPartnerData,
    setUser,
    signInUser,
    createUser,
    googleSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
