import React from "react";
import useAuth from "../hook/useAuth";
import useAxisosSecure from "../hook/useAxisosSecure";
import useSwal from "../hook/useSwal";
import { useNavigate } from "react-router";

const CreatePartner = () => {
  const { user } = useAuth();
  const axiosSecure = useAxisosSecure();
  const { success, errors } = useSwal();
  const navigate = useNavigate();

  const handlePartner = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const mode = e.target.mode.value;
    const time = e.target.mode.value;
    const location = e.target.location.value;
    const expriance = e.target.expriance.value;
    console.log(name, email, subject, mode, time, location, expriance);
    const newPartner = {
      name: name,
      profileImg: user?.photoURL,
      subject,
      mode,
      ratting: 0,
      partnerCount: 0,
      time,
      location,
      expriance,
    };
    const response = await axiosSecure.post("/partners", newPartner);
    if (response.data.insertedId) {
      success("success");
      navigate("/");
      e.target.reset();
    } else {
      errors("oops something wong");
    }
  };
  return (
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl mt-10 font-sans">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">
        Create Your Tutor Profile
      </h2>
      <form onSubmit={handlePartner} class="space-y-8">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            name="name"
            value={user?.displayName || ""}
            type="text"
            required
            placeholder="Aisha Rahman"
            class="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={user?.email}
            readonly
            class="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-600"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Subject You Teach
          </label>
          <select
            name="subject"
            class="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none"
          >
            <option>Mathematics</option>
            <option>Physics</option>
            <option>English</option>
            <option>Bangla</option>
            <option>Chemistry</option>
            <option>IELTS</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-3">
            Study Mode
          </label>
          <div class="grid grid-cols-2 gap-6">
            <label class="flex items-center space-x-4 cursor-pointer">
              <input
                type="radio"
                name="mode"
                value="Online"
                class="w-6 h-6 text-indigo-600"
                defaultChecked
              />
              <span class="text-lg text-gray-800">Online</span>
            </label>
            <label class="flex items-center space-x-4 cursor-pointer">
              <input
                type="radio"
                name="mode"
                value="In-Person"
                class="w-6 h-6 text-indigo-600"
              />
              <span class="text-lg text-gray-800">In-Person</span>
            </label>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Available Time
          </label>
          <input
            name="time"
            type="text"
            placeholder="Evening 6–9 PM or Weekends"
            class="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            name="location"
            type="text"
            placeholder="Dhaka, Bangladesh"
            class="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Experience Level
          </label>
          <select
            name="expriance"
            class="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Expert</option>
          </select>
        </div>

        <div class="pt-6">
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xl py-5 rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition duration-300 shadow-xl"
          >
            Create Tutor Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePartner;
