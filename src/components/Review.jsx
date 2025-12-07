import React from "react";
import { FaStar } from "react-icons/fa6";

const Review = () => {
  return (
    <div className="w-full p-14">
      <h3 className="text-2xl font-semibold my-5 text-primary tracking-tighter text-center">
        Reviews
      </h3>
      <div className="  grid grid-cols-1 gap-5 md:grid-cols-3 ">
        <div className="bg-[#f4f4f4] shadow-accent px-3 py-2.5">
          <div className="flex gap-3 items-center text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-success">
            “The matching system is simple but powerful. I quickly found someone
            with the same learning goals.”
          </p>
        </div>
        <div className="bg-[#f4f4f4] shadow-accent px-3 py-2.5">
          <div className="flex gap-3 items-center text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-success">
            “We built a small study group and help each other before exams. This
            platform made it possible!”
          </p>
        </div>
        <div className="bg-[#f4f4f4] shadow-accent px-3 py-2.5">
          <div className="flex gap-3 items-center text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-success">
            “I used to study alone and lose focus. After finding a partner here,
            I stay accountable and consistent. Highly recommend!”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
