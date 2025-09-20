"use client";
import React, { useState, useEffect, useRef } from "react";

const techData = [
  {
    id: 1,
    heading: "Food Genie",
    description: "Food recommendation bot based on your moods and your choice.",
    image: "/recommendation.jpg",
  },
  {
    id: 2,
    heading: "Core Calculator",
    description:
      "Allows user to just sit and relax with friends by ordering through our QR codes on the table.",
    image: "/calci.jpg",
  },
  {
    id: 3,
    heading: "Visual Dashboard",
    description:
      "Create invoices, track sales, and get paid instantly—all in one smooth, easy-to-use platform.",
    image: "/dashboard.jpg",
  },
  {
    id: 4,
    heading: "AI Powered Chatbot",
    description:
      "Real time analysis of your complete raw material. AI helps you guide your sales of stocks left and also vary according to season as well as festivals.",
    image: "/chatbot.jpg",
  },
  {
    id: 5,
    heading: "Gamification",
    description:
      "Manage staff shifts, performance and streamline operations with smart automation.",
    image: "/gamification.jpg",
  },
];

const TechCard = ({ tech, index, isVisible }) => {
  return (
    <div id="feature"
      className={`group relative bg-white rounded-2xl border border-gray-200 transition-all duration-500 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 cursor-pointer overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-800 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>

      {/* Image */}
      <div className="w-full h-48 sm:h-52 relative overflow-hidden rounded-t-2xl">
        <img
          src={tech.image}
          alt={tech.heading}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300 capitalize">
            {tech.heading}
          </h3>
          <div className="text-xs text-gray-400 font-medium">
            #{tech.id.toString().padStart(2, "0")}
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {tech.description}
        </p>

        {/* Hover indicator */}
        {/* <div className="absolute bottom-5 left-5 right-5 h-0.5 bg-gradient-to-r from-green-500 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}
      </div>
    </div>
  );
};

const Twp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id="tech"
      className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/5 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/4 right-20 w-24 h-24 bg-green-600/5 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-400/5 rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-transparent">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.03) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" ref={sectionRef}>
        {/* Header Section */}
        <div className="text-center mb-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-green-700 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                Our Features
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
                Features
              </span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techData.map((tech, index) => (
            <TechCard
              key={tech.id}
              tech={tech}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Twp;
