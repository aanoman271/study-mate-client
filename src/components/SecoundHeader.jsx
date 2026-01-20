import React from "react";
import { NavLink } from "react-router";
import useAuth from "../hook/useAuth";

const SecoundHeader = () => {
  const { user } = useAuth();
  return (
    <div className="flex  max-w-7xl h-15 relative mx-auto md:justify-between justify-center">
      <div className="hidden md:flex">
        <p className="text-secondary bottom-0 absolute font-semibold">
          Connect with learners{" "}
        </p>
      </div>
      <div className=" bg-gradient-to-br from-purple-600 to-indigo-600 rounded-tl-full md:w-[50%] w-full flex justify-end gap-5 items-center pr-3">
        {user ? (
          <small className="text-right text-gray-300 tracking-wide">
            <span className="text-[16px] font-semibold text-primary">
              Let’s
            </span>{" "}
            learn together, share ideas, help each other Looking forward to
            studying with you!
          </small>
        ) : (
          <>
            {" "}
            <NavLink to="/register" className="btn btn-outline btn-success h-7">
              Register
            </NavLink>
            <NavLink to="login" className="btn btn-outline btn-success h-7">
              LogIn
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default SecoundHeader;
