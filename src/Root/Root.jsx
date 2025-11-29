import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import { Outlet } from "react-router";
import Check from "../components/check";
import SecoundHeader from "../components/SecoundHeader";

const Root = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <SecoundHeader></SecoundHeader>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default Root;
