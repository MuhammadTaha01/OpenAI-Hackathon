// Pages/Services.jsx
import React from "react";
import ServicesHero from "../CommonCompo/ServicesHero";
import ServiceCard from "../CommonCompo/ServiceCard";
import { FaBrain, FaStethoscope, FaLaptopCode, FaComments } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaBrain />,
    title: "Mental Health Support",
    description: "Get expert psychiatric advice and mental health support anytime.",
  },
  {
    icon: <FaStethoscope />,
    title: "Medical Consultation",
    description: "Connect with qualified doctors for online consultations.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Tech Solutions",
    description: "Innovative solutions for your web and mobile applications.",
  },
  {
    icon: <FaComments />,
    title: "Personal Coaching",
    description: "Receive personalized coaching and guidance for growth.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <ServicesHero />

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {servicesData.map((service, idx) => (
          <ServiceCard
            key={idx}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;