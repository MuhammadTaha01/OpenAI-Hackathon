// components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 hover:bg-gray-700 transition-transform transform hover:scale-105 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;