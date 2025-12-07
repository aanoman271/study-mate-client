import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import { Outlet } from "react-router";
import SecoundHeader from "../components/SecoundHeader";
import Fotter from "../components/Fotter";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
        <SecoundHeader></SecoundHeader>
      </header>

      <main className="max-w-7xl mx-auto w-full flex-grow px-4 md:px-0">
        <Outlet></Outlet>
      </main>

      <footer>
        <Fotter></Fotter>
      </footer>
    </div>
  );
};

export default Root;
