// components/HomeHero.jsx
import React from "react";

const HomeHero = () => {
  return (
    <section className="relative bg-black min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Custom Animation Styles */}
      <style>
        {`
          @keyframes shimmer {
            0%, 100% { color: white; }
            50% { color: #9ca3af; } /* Tailwind gray-400 */
          }
          .animate-shimmer {
            animation: shimmer 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-32 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-3xl"></div>

      {/* Background Robot GIF (faded) */}
      <div className="absolute bottom-0 right-20 opacity-10 w-1/3 animate-pulse">
        <img
          src="https://helpx.adobe.com/content/dam/help/en/adobe-character-animator/using/behavior/jcr_content/main-pars/image_1453947288/robo-walk-cycle-out-of-frame.gif"
          alt="AI Assistant"
          className="w-full h-auto"
        />
      </div>

      {/* Hero Content */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 z-10 relative tracking-tight">
        Meet{" "}
        <span className="animate-shimmer">Dr. TahAI</span>
      </h1>

      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 z-10 relative leading-relaxed">
        Your <span className="text-white font-semibold">AI-powered Medical Assistant </span>  
        providing reliable guidance, smart health support,  
        and personalized care anytime, anywhere.
      </p>

      <a
        href="/chat"
        className="bg-white text-black px-8 py-4 rounded-full font-semibold tracking-wide transition-transform transform hover:scale-105 hover:bg-gray-200 z-10 relative shadow-lg"
      >
        Start Consultation
      </a>
    </section>
  );
};

export default HomeHero;