import { useEffect } from "react";
import useInstance from "./useInstance";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const instance = useInstance();
  const { user } = useAuth();

  useEffect(() => {
    const interceptor = instance.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.request.eject(interceptor);
    };
  }, [user]);

  return instance;
};

export default useAxiosSecure;

// import { useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router";
// import useAuth from "./useAuth";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000",
// });

// const useAxiosSecure = () => {
//   const { logOut, user } = useAuth();
//   const navigate = useNavigate();
//   console.log(user);
//   useEffect(() => {
//     const requestInterceptor = axiosInstance.interceptors.request.use(
//       (config) => {
//         const token = user.accessToken;
//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     const responseInterceptor = axiosInstance.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         const status = error.response ? error.response.status : null;
//         if (status === 401 || status === 403) {
//           await logOut();
//           navigate("/login");
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       axiosInstance.interceptors.request.eject(requestInterceptor);
//       axiosInstance.interceptors.response.eject(responseInterceptor);
//     };
//   }, [logOut, navigate]);

//   return axiosInstance;
// };

// export default useAxiosSecure;
