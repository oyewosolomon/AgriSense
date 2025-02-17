import React from 'react';
import { ArrowRight, Leaf, CloudRain, Database } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: <Leaf className="w-6 h-6" />, text: "Satellite imaging for real-time monitoring" },
    { icon: <CloudRain className="w-6 h-6" />, text: "Smart soil sensors for precise irrigation" },
    { icon: <Database className="w-6 h-6" />, text: "Integrated weather data analytics" }
  ];

  return (
    <div className="relative bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#84cc1680_4%,#84cc1610_50%,#22c55e10_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight animate-fade-in">
              Revolutionizing Agriculture with Precision and Innovation
            </h1>
            
            <p className="text-xl text-gray-600">
              Maximize yields, reduce waste, and optimize resources with our cutting-edge precision agriculture platform.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors border border-green-200 flex items-center justify-center">
                Learn More
              </button>
            </div>
          </div>

          {/* Right content - Image carousel */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 animate-carousel">
              <img 
                src="/images/dash-1.jpg" 
                alt="Modern farm with technology" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;