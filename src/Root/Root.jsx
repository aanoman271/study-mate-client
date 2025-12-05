import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import { Outlet } from "react-router";
import SecoundHeader from "../components/SecoundHeader";
import Fotter from "../components/Fotter";
// import useAuth from "../hook/useAuth";

const Root = () => {
  // const {loadding}=useAuth()
  return (
    <>
      <header>
        <Navbar></Navbar>
        <SecoundHeader></SecoundHeader>
      </header>
      <main className="max-w-7xl mx-auto block h-screen">
        {/* {
        loadding?<p>lodding</p>
       }  */}
        <Outlet></Outlet>
        <Fotter></Fotter>
      </main>
    </>
  );
};

export default Root;
