import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Star, TrendingUp, Droplet, Sprout } from 'lucide-react';

interface SuccessStory {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  stats: {
    icon: React.ReactNode;
    value: string;
    label: string;
  }[];
}

const SuccessSection = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories: SuccessStory[] = [
    {
      id: '1',
      name: "John Davidson",
      role: "Corn Farmer",
      location: "Iowa, USA",
      quote: "With AgriSense Solutions, I reduced water usage by 30% and increased my corn yield by 20%. The soil sensors and weather alerts have been absolute game-changers for my 2,000-acre farm.",
      stats: [
        { icon: <TrendingUp className="w-5 h-5" />, value: "+20%", label: "Yield Increase" },
        { icon: <Droplet className="w-5 h-5" />, value: "-30%", label: "Water Usage" },
        { icon: <Sprout className="w-5 h-5" />, value: "2,000", label: "Acres Optimized" }
      ]
    },
    {
      id: '2',
      name: "Maria Santos",
      role: "Vineyard Owner",
      location: "California, USA",
      quote: "The satellite imaging feature allowed me to detect a pest infestation early, saving my entire grape harvest. The ROI has been incredible, and the platform keeps getting better.",
      stats: [
        { icon: <TrendingUp className="w-5 h-5" />, value: "100%", label: "Harvest Saved" },
        { icon: <Droplet className="w-5 h-5" />, value: "+40%", label: "Efficiency" },
        { icon: <Sprout className="w-5 h-5" />, value: "500", label: "Acres Protected" }
      ]
    }
  ];

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transforming Farms, One Acre at a Time
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            See how farmers across the country are revolutionizing their operations with AgriSense Solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Success Story Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white relative">
            <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{stories[activeStory].name}</h3>
              <p className="text-green-200">{stories[activeStory].role} • {stories[activeStory].location}</p>
            </div>

            <blockquote className="text-xl italic mb-8 leading-relaxed">
              "{stories[activeStory].quote}"
            </blockquote>

            <div className="grid grid-cols-3 gap-4">
              {stories[activeStory].stats.map((stat, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="text-green-400">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-green-200">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <button 
                onClick={prevStory}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextStory}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent z-10" />
            <img 
              src="/images/Santos.jpg" 
              alt={`${stories[activeStory].name}'s farm`}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Image overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="flex items-center space-x-2 text-white mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Success Story {activeStory + 1}/{stories.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;