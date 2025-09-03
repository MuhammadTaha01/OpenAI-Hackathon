import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Chat", path: "/chat" },
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              to="/"
              className="text-white font-bold text-2xl flex items-center space-x-2 group"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 object-contain transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
              />
              <span className="hidden sm:inline-block bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text font-extrabold">
                Dr. TahAI
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="relative text-gray-300 font-medium transition-all duration-300 hover:text-white group"
              >
                {link.name}
                {/* underline effect */}
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2 transition"
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-y-10 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-10 opacity-0"
      >
        {(ref) => (
          <div
            ref={ref}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;