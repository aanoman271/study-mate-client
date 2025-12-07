import React from "react";
import TopThree from "./TopThree";
import Slider from "./slider";
import HowItsWork from "./HowItsWork";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <TopThree></TopThree>
      <HowItsWork></HowItsWork>
    </div>
  );
};

export default Home;
