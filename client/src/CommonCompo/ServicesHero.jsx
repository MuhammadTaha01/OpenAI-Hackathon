// components/ServicesHero.jsx
import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative bg-black py-28 text-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fadeInUp">
          Our Premium Services
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-200">
          Discover the range of medical AI services we provide to empower your
          health journey. Each service is built with precision, innovation, and
          care — tailored for you.
        </p>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </section>
  );
};

export default ServicesHero;