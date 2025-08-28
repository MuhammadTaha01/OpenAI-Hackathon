// components/HomeCTA.jsx
import React from "react";

const HomeCTA = () => {
  return (
    <section className="py-20 bg-gray-800 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Take Control of Your Mental Health
      </h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Whether you're seeking guidance, coaching, or just someone to talk to,
        our AI-powered system is here to help you anytime, anywhere.
      </p>
      <a
        href="/chat"
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-transform transform hover:scale-105"
      >
        Chat Now
      </a>
    </section>
  );
};

export default HomeCTA;