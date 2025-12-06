import React from "react";
import Logo from "../../components/Logo";
import { NavLink, useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";
import useSwal from "../../hook/useSwal";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const { success, errors } = useSwal();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        success("Sign Out successfull");
        navigate("/");
      })
      .catch((err) => {
        errors(err.message);
      });
  };
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline  font-semibold" : "hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline  font-semibold" : "hover:underline"
          }
          to="/findPartner"
        >
          Find Partner
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline  font-semibold" : "hover:underline"
              }
              to="/createPartnerProfile"
            >
              Create Partner Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline  font-semibold" : "hover:underline"
              }
              to="/myCollection"
            >
              My Collection
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline  font-semibold" : "hover:underline"
              }
              to="/"
            >
              blaaaaaaa
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" font-semibold menu menu-horizontal text-[16px] flex items-center gap-2.5  text-secondary  tracking-[1px]  px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-bottom bg-white  dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            <img
              className="w-10 h-10 rounded-full"
              src={
                user?.photoURL ||
                "/src/assets/istockphoto-1223671392-2048x2048.jpg"
              }
            />
            ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {user ? (
              <>
                {" "}
                <li>
                  <NavLink to="/">Profile</NavLink>
                </li>
                <li onClick={handleSignOut}>
                  <a>Log Out</a>
                </li>
              </>
            ) : (
              <li className="text-red-500">
                You have to Register or LogIn First to see your profile
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* menu  */}
    </div>
  );
};

export default Navbar;
