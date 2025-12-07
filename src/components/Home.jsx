import React from "react";
import TopThree from "./TopThree";
import Slider from "./slider";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <TopThree></TopThree>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
