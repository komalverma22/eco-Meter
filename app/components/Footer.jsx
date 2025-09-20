import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20 text-green">
      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us */}
        <div className="flex flex-col items-start justify-center mt-10">
          <img
            loading="lazy"
            src="/logo.png"
            alt="The Eminent Class"
            className="h-20 w-30 text-2xl font-bold text-green font-against"
          />

          <p className="mt-2 text-sm">©2025 Ecometer | All Rights Reserved.</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start mt-12">
          <h2 className="text-lg font-semibold mb-2">Social Media</h2>
          <div className="w-18 border-b mb-4"></div>

          <div className="flex items-center gap-3 mb-3">
            <a
              href="#"
              className="p-2 bg-gray-900 text-white rounded hover:opacity-80"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-600 text-white rounded hover:opacity-80"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-800 text-white rounded hover:opacity-80"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="p-2 bg-black text-white rounded hover:opacity-80"
            >
              <FaXTwitter />
            </a>
          </div>
          <span>
            <a href="/privacy-policy" className="text-sm hover:underline">
              Privacy and Policy {" | "}
            </a>
            <a href="/terms" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </span>

          <p className="text-sm">
            Reach us:{" "}
            <a
              href="mailto:contact@theeminentclass.com "
              className="text-blue-600 hover:underline"
            >
              mail@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start mt-12">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <div className="w-10 border-b mb-4"></div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            <a href="/magazines" className="hover:underline">
              Home
            </a>
            <a href="/newsletters" className="hover:underline">
              Features
            </a>
            <a href="/uncensored" className="hover:underline">
              How it works
            </a>

            <a href="/contact" className="hover:underline font-bold">
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
