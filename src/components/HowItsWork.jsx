import React from "react";
import create from "../assets/createProfile.png";
import createProfile from "../assets/Yuppies - Sketch.png";
import finds from "../assets/Yuppies - Folder Search.png";
import add from "../assets/Tech Life - Add User.png";
import study from "../assets/Lifesavers - Study Online.png";
import growth from "../assets/Happy Bunch - Chat.png";

const HowItsWork = () => {
  return (
    <div className="  w-full   ">
      <div className="flex flex-col  items-center gap-4 py-7">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 p-2 flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 64 64" class="w-7 h-7 text-white">
            <path
              d="M32 42 L14 32 L18 26 L32 36 L46 26 L50 32 Z"
              fill="none"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              d="M24 22 Q32 14 40 22"
              fill="none"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-2xl text-center tracking-wide text-purple-600">
          How It <span className="-tracking-tighter">Work</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-14">
        <div className="flex flex-col items-center justify-between">
          <img className="w-30" src={create} alt="" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-primary font-semibold">
              {" "}
              Create Your Account
            </h4>
            <p className="text-secondary">
              Sign up using your email or social account. It only takes a few
              seconds to start your journey toward finding the perfect study
              partner.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img className="w-30" src={createProfile} alt="" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-primary font-semibold">
              {" "}
              Build Your Partner Profile{" "}
            </h4>
            <p className="text-secondary">
              Add your skills, study subjects, class level, location,
              availability, and learning goals. A complete profile helps others
              know if you’re the right match.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img className="w-30" src={finds} alt="" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-primary font-semibold">
              {" "}
              Find a Study Partner
            </h4>
            <p className="text-secondary">
              Explore hundreds of partner profiles. Filter by subject,
              interests, or location to find the best match for your study
              style.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img className="w-30" src={add} alt="" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-primary font-semibold">
              {" "}
              Match & Start Studying
            </h4>
            <p className="text-secondary">
              If you find someone you like, send a request—just like a friend
              request. If someone sends you a request, you can accept or decline
              with one click.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img className="w-30" src={study} alt="" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-primary font-semibold">
              {" "}
              Grow & Improve Together
            </h4>
            <p className="text-secondary">
              Stay motivated with your partner, complete learning goals, and
              strengthen your knowledge through collaboration.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <img className="w-30" src={growth} alt="" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl text-primary font-semibold">
              {" "}
              Grow & Improve Together{" "}
            </h4>
            <p className="text-secondary">
              Stay motivated with your partner, complete learning goals, and
              strengthen your knowledge through collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;
