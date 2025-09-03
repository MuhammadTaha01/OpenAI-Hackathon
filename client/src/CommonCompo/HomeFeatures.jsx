// components/HomeFeatures.jsx
import React from "react";
import { FaHeartbeat, FaUserMd, FaRobot, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaHeartbeat />,
    title: "Health Monitoring",
    description: "Track symptoms and monitor your wellbeing with AI-driven insights.",
  },
  {
    icon: <FaUserMd />,
    title: "Virtual Consultation",
    description: "Get instant guidance from your AI medical assistant anytime.",
  },
  {
    icon: <FaRobot />,
    title: "AI Diagnosis Support",
    description: "Smart AI suggestions to help identify possible health concerns.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Assistance",
    description: "Always available to answer your medical queries and provide support.",
  },
];

const HomeFeatures = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Our Services
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:from-gray-800 hover:to-gray-700"
            >
              <div className="text-5xl mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
