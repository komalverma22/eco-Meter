'use client';

import { useState } from 'react';
import { Leaf, Globe, BarChart3, Calculator, Users, Clock, Shield, Share2 } from 'lucide-react';

export default function CarbonFootprintCalculator() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-700 to-green-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div 
          className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Leaf 
            className={`w-10 h-10 text-white transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} 
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Calculate Your Carbon
          <br />
          <span className="text-green-200">Footprint</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white text-opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Take the first step towards a sustainable future. Understand your
          <br />
          environmental impact and discover actionable ways to reduce it.
        </p>

        {/* Tags */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <div className="bg-white bg-opacity-15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm border border-white border-opacity-20 hover:bg-opacity-25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            Eco-Friendly
          </div>
          <div className="bg-white bg-opacity-15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm border border-white border-opacity-20 hover:bg-opacity-25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Climate Action
          </div>
          <div className="bg-white bg-opacity-15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm border border-white border-opacity-20 hover:bg-opacity-25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Sustainable Living
          </div>
          <div className="bg-white bg-opacity-15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm border border-white border-opacity-20 hover:bg-opacity-25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Free Calculator
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center flex-wrap gap-8 md:gap-12 mb-10 text-white text-opacity-90">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-green-200" />
            <span className="text-base md:text-lg">50,000+ users trust us</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-green-200" />
            <span className="text-base md:text-lg">Takes only 3 minutes</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-green-200" />
            <span className="text-base md:text-lg">100% free & private</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <button 
            className="bg-white text-green-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 group"
            onClick={() => {
              // Add your navigation logic here
              console.log('Starting carbon footprint calculation...');
            }}
          >
            <Calculator className="w-5 h-5 group-hover:rotate-6 transition-transform" />
            Start Calculating Now
            <span className="ml-1">→</span>
          </button>
          
         
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-8 animate-pulse opacity-30">
          <Leaf className="w-8 h-8 text-white transform rotate-45" />
        </div>
        <div className="absolute bottom-1/4 right-8 animate-pulse opacity-30 animation-delay-1000">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <div className="absolute top-1/3 right-12 animate-pulse opacity-20 animation-delay-500">
          <BarChart3 className="w-7 h-7 text-white transform -rotate-12" />
        </div>
      </div>
    </div>
  );
}