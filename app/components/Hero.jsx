"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/herobg.webp"
          alt="Background"
          fill
          className="object-cover object-center"
        />
        {/* Overlay for slight darkening if needed */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-900 drop-shadow-lg">
          Ecometer
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-lg sm:text-xl lg:text-2xl text-gray-600 drop-shadow-md">
          Tech that saves the planet by making climate action personal,
          measurable, and achievable for everyone.
        </p>

        {/* Glassmorphism panel for dashboard */}
        <div className="mt-10 w-full max-w-4xl p-6 sm:p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
          {/* Placeholder content: Replace with your dashboard */}
          <div className="text-white text-center">
            <p className="text-lg sm:text-xl">Your Dashboard Goes Here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
