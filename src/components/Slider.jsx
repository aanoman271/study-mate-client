import React from "react";

const Slider = () => {
  return (
    <div className="w-full mx-auto mt-8">
      <div className="carousel w-full h-[380px] rounded-t-xl shadow-md overflow-hidden">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex flex-col items-center justify-center p-10">
            <h2 className="text-4xl font-bold mb-3">
              Find Your Perfect Study Partner
            </h2>
            <p className="text-lg max-w-xl text-center opacity-90">
              Connect with learners who match your goals, habits, and study
              style.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white flex flex-col items-center justify-center p-10">
            <h2 className="text-4xl font-bold mb-3">
              Achieve More With Smart Collaboration
            </h2>
            <p className="text-lg max-w-xl text-center opacity-90">
              Increase productivity through accountability, teamwork, and shared
              learning.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 text-white flex flex-col items-center justify-center p-10">
            <h2 className="text-4xl font-bold mb-3">
              Grow Your Skills & Knowledge
            </h2>
            <p className="text-lg max-w-xl text-center opacity-90">
              Learn faster, stay motivated, and reach your academic goals
              together.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
