// components/HomeHero.jsx
import React from "react";

const HomeHero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
        Welcome to RAG Psychiatrist
      </h1>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 animate-fadeIn delay-200">
        Your AI-powered mental health companion. Get guidance, support, and
        personalized advice whenever you need it.
      </p>
      <a
        href="/chat"
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-105 animate-fadeIn delay-400"
      >
        Start Chatting
      </a>
    </section>
  );
};

export default HomeHero;