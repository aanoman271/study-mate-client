import React from "react";
import useAuth from "../hook/useAuth";

const Fotter = () => {
  const { navLink } = useAuth();
  return (
    <div className="h-28 flex overflow-hidden">
      <div className="bg-gradient-to-br h-full from-purple-600 to-indigo-600 w-[50%] rounded-tr-full">
        <ul>{navLink}</ul>
      </div>
      <div className="h-full  w-[50%] ">gfdf</div>
    </div>
  );
};

export default Fotter;
