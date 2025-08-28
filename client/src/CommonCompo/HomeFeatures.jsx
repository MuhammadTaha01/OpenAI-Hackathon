// components/HomeFeatures.jsx
import React from "react";
import { FaBrain, FaStethoscope, FaLaptopCode, FaComments } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "AI-Powered Insights",
    description: "Get instant, intelligent suggestions tailored to your needs.",
  },
  {
    icon: <FaStethoscope />,
    title: "Professional Guidance",
    description: "Access expert advice for mental wellness and care.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Tech-Driven Solutions",
    description: "Modern tools and technology to enhance your experience.",
  },
  {
    icon: <FaComments />,
    title: "Personalized Coaching",
    description: "Receive tailored coaching and support anytime.",
  },
];

const HomeFeatures = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800 hover:bg-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div className="text-4xl mb-4 text-blue-500">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;