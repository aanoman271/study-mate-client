import React from "react";
import { NavLink } from "react-router";

const SecoundHeader = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between ">
      <div className="">
        <h3 className="text-2xl text-gray-800 font-semibold animate-bounce">
          Study <span className="text-purple-600">Made</span>
        </h3>
        <p className="text-secondary font-semibold">For Learner And Partner </p>
      </div>
      <div className=" bg-gradient-to-br from-purple-600 to-indigo-600 rounded-tl-full w-[50%] flex justify-end gap-5 items-center pr-3">
        <NavLink to="/register" className="btn btn-outline btn-success h-7">
          Register
        </NavLink>
        <NavLink to="login" className="btn btn-outline btn-success h-7">
          LogIn
        </NavLink>
      </div>
    </div>
  );
};

export default SecoundHeader;
