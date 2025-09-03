// components/HomeCTA.jsx
import React from "react";

const HomeCTA = () => {
  return (
    <section className="relative py-24 bg-black text-center px-6 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* CTA Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fadeInUp">
          Take Control of Your Health Today
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fadeInUp delay-200">
          Your personal AI medical assistant is always here to guide, support,  
          and provide you with reliable health insights — anytime, anywhere.
        </p>
        <a
          href="/chat"
          className="bg-white text-black px-10 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-gray-200 animate-fadeInUp delay-400 inline-block"
        >
          Start Chatting
        </a>
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
          .delay-400 {
            animation-delay: 0.4s;
          }
        `}
      </style>
    </section>
  );
};

export default HomeCTA;