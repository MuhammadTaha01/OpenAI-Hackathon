// Pages/Services.jsx
import React from "react";
import ServicesHero from "../CommonCompo/ServicesHero";
import ServiceCard from "../CommonCompo/ServiceCard";
import { FaBrain, FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaBrain />,
    title: "Mental Health Support",
    description: "Talk to your AI assistant for stress, anxiety, or emotional guidance anytime.",
  },
  {
    icon: <FaStethoscope />,
    title: "Symptom Checker",
    description: "Get instant, AI-powered insights on your symptoms before seeing a doctor.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health Monitoring",
    description: "Track vital signs, habits, and daily health logs for better well-being.",
  },
  {
    icon: <FaUserMd />,
    title: "Medical Consultation",
    description: "Connect with certified doctors for online consultations when needed.",
  },
];

const Services = () => {
  return (
    <div className="bg-black min-h-screen">
      <ServicesHero />

      <section className="relative py-20">
        {/* Background Accents */}
        <div className="absolute -top-20 left-0 w-[20rem] h-[20rem] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-16">
            Your <span className="text-blue-400">Personal Medical Assistant</span> Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Services;