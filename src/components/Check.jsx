import React from "react";

const Check = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-700">
        StudyMate – ৪টা লাইট & ক্লিন কালার প্যালেট
      </h1>

      {/* Palette 1 – Soft Lavender (সবচেয়ে ক্লিন) */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-bold mb-6 text-purple-600">
          1. Soft Lavender Dream
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#8b5cf6] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              Primary
              <br />
              <span className="text-sm text-gray-600">#8b5cf6</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#c4b5fd] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              Light
              <br />
              <span className="text-sm text-gray-600">#c4b5fd</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#f3e8ff] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              BG
              <br />
              <span className="text-sm text-gray-600">#f3e8ff</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md md:col-span-2">
            <div className="h-32 bg-gradient-to-r from-[#8b5cf6] to-[#c4b5fd] rounded-t-2xl flex items-center justify-center">
              <span className="text-white font-bold">Soft Gradient</span>
            </div>
          </div>
        </div>
        <button className="mt-6 px-8 py-3 bg-[#8b5cf6] text-white rounded-xl shadow hover:shadow-lg">
          Example Button
        </button>
      </div>

      {/* Palette 2 – Mint Breeze */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-bold mb-6 text-teal-600">
          2. Mint Breeze
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#2dd4bf] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              Primary
              <br />
              <span className="text-sm text-gray-600">#2dd4bf</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#99f6e4] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              Light
              <br />
              <span className="text-sm text-gray-600">#99f6e4</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#f0fdfa] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              BG
              <br />
              <span className="text-sm text-gray-600">#f0fdfa</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md md:col-span-2">
            <div className="h-32 bg-gradient-to-r from-[#2dd4bf] to-[#99f6e4] rounded-t-2xl flex items-center justify-center">
              <span className="text-white font-bold">Fresh Gradient</span>
            </div>
          </div>
        </div>
        <button className="mt-6 px-8 py-3 bg-[#2dd4bf] text-white rounded-xl shadow hover:shadow-lg">
          Example Button
        </button>
      </div>

      {/* Palette 3 – Sky Blue */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-bold mb-6 text-sky-600">
          3. Sky Blue Calm
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#0ea5e9] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              Primary
              <br />
              <span className="text-sm text-gray-600">#0ea5e9</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#bae6fd] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              Light
              <br />
              <span className="text-sm text-gray-600">#bae6fd</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#f0f9ff] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              BG
              <br />
              <span className="text-sm text-gray-600">#f0f9ff</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md md:col-span-2">
            <div className="h-32 bg-gradient-to-r from-[#0ea5e9] to-[#bae6fd] rounded-t-2xl flex items-center justify-center">
              <span className="text-white font-bold">Calm Gradient</span>
            </div>
          </div>
        </div>
        <button className="mt-6 px-8 py-3 bg-[#0ea5e9] text-white rounded-xl shadow hover:shadow-lg">
          Example Button
        </button>
      </div>

      {/* Palette 4 – Peach Glow */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">
          4. Peach Glow
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#fb923c] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              Primary
              <br />
              <span className="text-sm text-gray-600">#fb923c</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#fed7aa] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              Light
              <br />
              <span className="text-sm text-gray-600">#fed7aa</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md">
            <div className="h-32 bg-[#fff7ed] rounded-t-2xl"></div>
            <p className="p-3 font-semibold">
              BG
              <br />
              <span className="text-sm text-gray-600">#fff7ed</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md md:col-span-2">
            <div className="h-32 bg-gradient-to-r from-[#fb923c] to-[#fed7aa] rounded-t-2xl flex items-center justify-center">
              <span className="text-white font-bold">Warm Gradient</span>
            </div>
          </div>
        </div>
        <button className="mt-6 px-8 py-3 bg-[#fb923c] text-white rounded-xl shadow hover:shadow-lg">
          Example Button
        </button>
      </div>

      <p className="text-center text-lg text-gray-600 mt-10">
        পছন্দ হলে শুধু নাম্বার বলো (যেমন: 1 বা 2) — আমি তৎক্ষণাৎ সেই প্যালেটের
        পুরো Tailwind setup + Navbar + Hero Section রেডি করে দিব! 😊
      </p>
      {/* 1. Rose Quartz (সবচেয়ে গর্জিয়াস + লাইট) */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-rose-600">
          1. Rose Quartz Glow
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#f472b6]"></div>
            <p className="p-4 font-bold">
              <span className="text-sm text-gray-600">Primary</span>
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#fbb6ce]"></div>
            <p className="p-4 font-bold">
              <span className="text-sm text-gray-600">Light</span>
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#fdf2f8]"></div>
            <p className="p-4 font-bold">
              <span className="text-sm text-gray-600">BG</span>
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:col-span-2">
            <div className="h-40 bg-gradient-to-br from-[#f472b6] via-[#f9a8d4] to-[#fcd34d] flex items-center justify-center">
              <span className="text-white text-2xl font-bold drop-shadow-lg">
                Sunset Glow
              </span>
            </div>
          </div>
        </div>
        <button className="mt-8 px-10 py-4 bg-gradient-to-r from-[#f472b6] to-[#f9a8d4] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition text-xl">
          Join StudyMate
        </button>
      </div>

      {/* 2. Lavender Bliss */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-purple-600">
          2. Lavender Bliss
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#a78bfa]"></div>
            <p className="p-4 font-bold">Primary</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#ddd6fe]"></div>
            <p className="p-4 font-bold">Light</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#f5f3ff]"></div>
            <p className="p-4 font-bold">BG</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:col-span-2">
            <div className="h-40 bg-gradient-to-r from-[#a78bfa] to-[#c4b5fd] flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                Soft Lavender
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Sky Peach Dream */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-sky-500">
          3. Sky Peach Dream
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#38bdf8]"></div>
            <p className="p-4 font-bold">Primary</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#bae6fd]"></div>
            <p className="p-4 font-bold"></p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#ecfeff]"></div>
            <p className="p-4 font-bold"></p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:col-span-2">
            <div className="h-40 bg-gradient-to-r from-[#38bdf8] via-[#f0abfc] to-[#fcd34d] flex items-center justify-center">
              <span className="text-white text-2xl font-bold drop-shadow-lg">
                Dreamy Sky
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Mint Rose Glow */}
      <div className="max-w-6xl mx-wrapper mb-20 text-center">
        <h2 className="text-3xl font-bold mb-8 text-teal-500">
          4. Mint Rose Glow
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#5eead4]"></div>
            <p className="p-4 font-bold"></p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#99f6e4]"></div>
            <p className="p-4 font-bold"></p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-40 bg-[#f0fdfa]"></div>
            <p className="p-4 font-bold"></p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:col-span-2">
            <div className="h-40 bg-gradient-to-r from-[#5eead4] to-[#f9a8d4] flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                Fresh & Gorgeous
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 p-8 bg-purple-50 rounded-2xl">
        <div class="bg-[#6d28d9] text-white p-6 rounded-xl text-center font-bold">
          Primary
        </div>
        <div class="bg-[#a78bfa] text-gray-900 p-6 rounded-xl text-center font-bold">
          Accent
        </div>
        <div class="bg-[#ec4899] text-white p-6 rounded-xl text-center font-bold">
          Highlight
        </div>
        <div class="bg-gradient-to-r from-[#6d28d9] to-[#ec4899] p-6 rounded-xl text-white text-center font-bold">
          Gradient
        </div>
        <div class="bg-[#1e1b4b] text-white p-6 rounded-xl text-center font-bold">
          Dark BG
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center">
          <div class="w-32 h-32 mx-auto mb-4 rounded-2xl bg-[#6d28d9] shadow-lg"></div>
          <p class="text-2xl font-bold text-[#6d28d9]">Primary</p>
          <code class="text-sm text-gray-600">#6d28d9</code>
        </div>
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center">
          <div class="w-32 h-32 mx-auto mb-4 rounded-2xl bg-[#a78bfa] shadow-lg"></div>
          <p class="text-2xl font-bold text-[#a78bfa]">Primary Light</p>
          <code class="text-sm text-gray-600">#a78bfa</code>
        </div>
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center">
          <div class="w-32 h-32 mx-auto mb-4 rounded-2xl bg-[#ec4899] shadow-lg"></div>
          <p class="text-2xl font-bold text-[#ec4899]">Accent</p>
          <code class="text-sm text-gray-600">#ec4899</code>
        </div>
        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 text-center col-span-1 md:col-span-3">
          <div class="w-full h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#6d28d9] to-[#ec4899] shadow-lg flex items-center justify-center">
            <p class="text-white text-3xl font-bold">Gradient Button / Hero</p>
          </div>
          <p class="text-2xl font-bold bg-gradient-to-r from-[#6d28d9] to-[#ec4899] bg-clip-text text-transparent">
            StudyMate – Find Your Partner
          </p>
        </div>
        <div class="bg-white rounded-2xl shadow-xl p-8 col-span-1 md:col-span-3">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            Light Mode Preview
          </h2>
          <div class="bg-[#faf5ff] p-10 rounded-xl">
            <button class="bg-[#6d28d9] hover:bg-[#4c1d95] text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition">
              Create Profile
            </button>
          </div>
        </div>
        <div class="bg-gray-900 rounded-2xl shadow-xl p-8 col-span-1 md:col-span-3">
          <h2 class="text-2xl font-bold text-white mb-6 text-center">
            Dark Mode Preview
          </h2>
          <div class="bg-[#1e1b4b] p-10 rounded-xl">
            <button class="bg-[#6d28d9] hover:bg-[#a78bfa] text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition">
              Send Partner Request
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Check;
