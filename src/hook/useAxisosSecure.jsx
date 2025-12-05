import React, { useEffect } from "react";
import useInstance from "./useInstance";
import useAuth from "./useAuth";

const useAxisosSecure = () => {
  const instance = useInstance();
  const { user } = useAuth();
  useEffect(() => {
    instance.interceptors.request.use((confiq) => {
      if (user?.accessToken) {
        confiq.headers.Authorization = `Bearer ${user.accessToken}`;
        console.log(confiq);
        return confiq;
      }
      (error) => {
        return Promise.reject(error);
      };
    });
  }, [instance]);
  return instance;
};

export default useAxisosSecure;
