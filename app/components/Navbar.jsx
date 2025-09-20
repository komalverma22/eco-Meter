"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center overflow-hidden">
              <Image
                src="/logo.jpg"
                width={80}
                height={80}
                alt="logo"
                className="border overflow-y-hidden"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#"
                className="text-black hover:text-gray-800 transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-800 transition-colors duration-200 font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-800 transition-colors duration-200 font-medium"
              >
                How it Works
              </a>

              {/* Dashboard Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-black hover:text-gray-800 transition-colors duration-200 font-medium flex items-center space-x-1"
                >
                  <span>Dashboard</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-6 w-48 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 shadow-xl">
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:text-gray-800 hover:bg-white/20 transition-colors duration-200"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:text-gray-800 hover:bg-white/20 transition-colors duration-200"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:text-gray-800 hover:bg-white/20 transition-colors duration-200"
                    >
                      Profile
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Auth Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-md">
              Sign Up / Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-800 transition-colors duration-200 ease-in-out"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-black hover:text-gray-800 hover:bg-white/20 rounded-md transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-black hover:text-gray-800 hover:bg-white/20 rounded-md transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-black hover:text-gray-800 hover:bg-white/20 rounded-md transition-colors duration-200"
            >
              How it Works
            </a>

            {/* Mobile Dashboard Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left px-3 py-2 text-black hover:text-gray-800 hover:bg-white/20 rounded-md transition-colors duration-200 flex items-center justify-between"
              >
                Dashboard
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ease-in-out  ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  <a
                    href="#"
                    className="block px-3 py-2 text-black hover:text-gray-800 hover:bg-white/20 rounded-md transition-colors duration-200"
                  >
                    Analytics
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 text-black hover:text-gray-800 hover:bg-white/20 rounded-md transition-colors duration-200"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 text-black hover:text-gray-800 hover:bg-white/20 rounded-md transition-colors duration-200"
                  >
                    Profile
                  </a>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/20">
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-md">
                Sign Up / Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
