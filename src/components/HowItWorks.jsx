import React from "react";
import { Book, UserPlus, CheckCircle, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Create Your Account",
      icon: <UserPlus size={50} />,
      desc: "Sign up and get access to thousands of potential study partners across different subjects and locations.",
    },
    {
      title: "2. Build Your Partner Profile",
      icon: <Book size={50} />,
      desc: "Create your partner profile by adding your skills, study subjects, goals, schedule, and more.",
    },
    {
      title: "3. Find & Send Requests",
      icon: <CheckCircle size={50} />,
      desc: "Browse through partner profiles. Send a request to connect—just like a friend request on Facebook.",
    },
    {
      title: "4. Connect & Study Together",
      icon: <Users size={50} />,
      desc: "Once accepted, start collaborating, sharing notes, studying together, and tracking progress.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        How It Works
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-gradient-to-br from-purple-50 to-indigo-50 text-center border border-indigo-100"
          >
            <div className="flex justify-center mb-4 text-indigo-600">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
