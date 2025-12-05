import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import { Outlet } from "react-router";
import SecoundHeader from "../components/SecoundHeader";
import Fotter from "../components/Fotter";

const Root = () => {
  return (
    // মূল কন্টেইনার: পুরো স্ক্রিনের উচ্চতা নিশ্চিত করে এবং flex লেআউট সেট করে
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
        <SecoundHeader></SecoundHeader>
      </header>

      {/* main কন্টেন্ট এরিয়া: এটি flex-grow ব্যবহার করে যতটুকু জায়গা দরকার ততটুকু প্রসারিত হবে */}
      <main className="max-w-7xl mx-auto w-full flex-grow px-4 md:px-0">
        <Outlet></Outlet>
      </main>

      {/* <footer> ট্যাগ ব্যবহার করে ফুটারকে main এর বাইরে স্থাপন করা হলো */}
      <footer>
        <Fotter></Fotter>
      </footer>
    </div>
  );
};

export default Root;
