import React from "react";
import { NavLink } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t mt-10">
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-700">
              Study <span className="text-purple-600">Made</span>
            </h2>
            <p className="text-secondary mt-2 font-medium">
              For Learner And Partner
            </p>

            <div className="flex gap-4 mt-5 text-lg">
              <FaFacebookF className="hover:text-purple-600 cursor-pointer" />
              <FaTwitter className="hover:text-purple-600 cursor-pointer" />
              <FaInstagram className="hover:text-purple-600 cursor-pointer" />
              <FaLinkedin className="hover:text-purple-600 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink className="hover:text-purple-600" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-purple-600" to="/findPartner">
                  Find Partner
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-purple-600" to="/register">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-purple-600" to="/login">
                  LogIn
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Support
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-purple-600 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="  bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-10">
            <p className="opacity-[0.8] text-gray-400 ">
              StudyMate helps students find perfect study partners, share
              knowledge, and grow together through collaboration.
            </p>
          </div>
        </div>

        <div className="border-t border-white/30 mt-10 pt-6 text-center">
          <p className="text-sm">
            © 2025{" "}
            <span className="text-purple-600 font-semibold">StudyMade</span>-
            All Rights Reserved | Made with
            <FaHeart className="inline mx-1 text-red-300" /> by
            <span className="font-bold"> Noman </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
