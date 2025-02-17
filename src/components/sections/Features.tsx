import React from 'react';

const features = [
  {
    icon: '📊',
    title: 'Real-Time Project Tracking',
    description: 'Monitor progress, budgets, and timelines instantly.',
  },
  {
    icon: '🏗️',
    title: 'BIM Integration',
    description: 'Seamlessly integrate Building Information Modeling for precision.',
  },
  {
    icon: '⚙️',
    title: 'Resource Optimization',
    description: 'Allocate resources efficiently to minimize waste.',
  },
  {
    icon: '⏱️',
    title: 'Delay Reduction',
    description: 'Cut project delays by 30% with proactive management.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center"
            >
              <div className="text-6xl mb-4 hover:animate-bounce">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;