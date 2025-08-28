// components/HomeHero.jsx
import React from "react";

const HomeHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Robot GIF from URL */}
      <div className="absolute bottom-0 right-96 opacity-20 w-1/2 animate-wave">
        <img
          src="https://helpx.adobe.com/content/dam/help/en/adobe-character-animator/using/behavior/jcr_content/main-pars/image_1453947288/robo-walk-cycle-out-of-frame.gif"
          alt="Waving Robot"
          className="w-full h-auto"
        />
      </div>

      {/* Hero Content */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 z-10 relative">
        Welcome to RAG Psychiatrist
      </h1>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 z-10 relative">
        Your AI-powered mental health companion. Get guidance, support, and
        personalized advice whenever you need it.
      </p>
      <a
        href="/chat"
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-105 z-10 relative"
      >
        Start Chatting
      </a>
    </section>
  );
};

export default HomeHero;