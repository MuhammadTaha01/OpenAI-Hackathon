// components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:from-gray-800 hover:to-gray-700 overflow-hidden">
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-2xl"></div>

      {/* Icon */}
      <div className="relative z-10 text-5xl mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
