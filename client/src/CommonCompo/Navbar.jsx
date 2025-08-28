import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Chat", path: "/chat" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white font-bold text-2xl cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              MyLogo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
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
        enterFrom="-translate-y-20 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-20 opacity-0"
      >
        {(ref) => (
          <div className="md:hidden bg-gray-900">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
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