import React from "react";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <a href="/" class="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 p-2 flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 64 64" className="w-7 h-7 text-white">
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

      <div class="leading-tight">
        <h1 class="text-2xl font-bold text-[#7e29f9] text-[gradient-to-b from-indigo-400 to-indigo-700] ">
          Study<span class="text-purple-600">Mate</span>
        </h1>
        <p
          class="text-[11px] font-medium text-[ #454545
] tracking-wider"
        >
          Learn ANYWHERE
        </p>
      </div>
    </a>
  );
};

export default Logo;
