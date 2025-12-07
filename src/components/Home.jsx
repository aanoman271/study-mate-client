import React from "react";
import TopThree from "./TopThree";
import Slider from "./slider";
import HowItsWork from "./HowItsWork";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <TopThree></TopThree>
      <HowItsWork></HowItsWork>
      <Review></Review>
    </div>
  );
};

export default Home;
