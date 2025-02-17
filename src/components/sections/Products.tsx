import React, { useState } from 'react';
import { Satellite, Droplet, Cloud, ChevronRight } from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const ProductsSection = () => {
  const [activeFeature, setActiveFeature] = useState<string>('satellite');

  const features: Feature[] = [
    {
      id: 'satellite',
      icon: <Satellite className="w-8 h-8" />,
      title: "Satellite Imaging",
      description: "Monitor crop health, detect pests, and identify stress areas with high-resolution satellite imagery.",
      benefits: [
        "Daily field monitoring",
        "Early pest detection",
        "Crop stress analysis",
        "Growth tracking"
      ]
    },
    {
      id: 'sensors',
      icon: <Droplet className="w-8 h-8" />,
      title: "Soil Sensors",
      description: "Get real-time data on soil moisture, temperature, and nutrient levels to optimize irrigation and fertilization.",
      benefits: [
        "Real-time moisture tracking",
        "Nutrient analysis",
        "Temperature monitoring",
        "Irrigation optimization"
      ]
    },
    {
      id: 'weather',
      icon: <Cloud className="w-8 h-8" />,
      title: "Weather Integration",
      description: "Plan planting and harvesting with hyper-local weather forecasts and alerts for extreme conditions.",
      benefits: [
        "7-day forecasts",
        "Extreme weather alerts",
        "Historical patterns",
        "Smart scheduling"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-24" id='resources'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Precision Agriculture Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge technology to optimize your farming operations
            and maximize yields while minimizing resource usage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature Navigation */}
          <div className="space-y-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                  activeFeature === feature.id
                    ? 'bg-green-600 text-white shadow-lg scale-102'
                    : 'bg-white text-gray-700 hover:bg-green-50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    activeFeature === feature.id
                      ? 'bg-green-500'
                      : 'bg-green-100'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className={`${
                      activeFeature === feature.id
                        ? 'text-green-100'
                        : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                  <ChevronRight className={`w-6 h-6 transform transition-transform ${
                    activeFeature === feature.id ? 'rotate-90' : ''
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Feature Preview */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/benefit.jpg" 
              alt="Feature preview"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Key Benefits
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {features.find(f => f.id === activeFeature)?.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
            <span>Schedule a Demo</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;