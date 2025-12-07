import React from "react";
import useAuth from "../hook/useAuth";
import { Link } from "react-router";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="flex sm:w-[95%] justify-center items-center">
      <div className="  w-[80%] deatailsCard  mx-auto pb-8 bg-[#f4f4f4] rounded-s-sm">
        <div className="bg-[#fff] border-b  border-success relative ">
          <div className=" relative top-11 px-6 ">
            <img
              className="ring-success ring-2 max-h-40 max-w-40 object-cover rounded-full "
              src={user.photoURL}
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 px-6 flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-primary">
            {user?.displayName}
          </h2>
          <small className="tracking-tight text-gray-500">{user?.email}</small>
          <Link to="/myCollection" className="w-[150px] btn btn-success">
            My collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
