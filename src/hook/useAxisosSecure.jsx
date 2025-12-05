import React from "react";
import useInstance from "./useInstance";
import useAuth from "./useAuth";

const useAxisosSecure = () => {
  const instance = useInstance();
  const { user } = useAuth();
  instance.interceptors.request.use((confiq) => {
    if (user?.accessToken) {
      confiq.headers.Authorization = `Bearer ${user.accessToken}`;
      console.log(confiq);
      return confiq;
    }
  });

  return instance;
};

export default useAxisosSecure;
