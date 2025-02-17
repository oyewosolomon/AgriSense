import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Package, Timer, CheckCircle, Bell,
  Truck, Plane, Building, ShoppingBag, Hospital,
  Coffee, Store, LineChart, Users, Leaf
} from 'lucide-react';

// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      title: "Place Your Order",
      description: "Customers or businesses place orders through our platform or integrated partner apps.",
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "Autonomous Dispatch",
      description: "Our system assigns the delivery to the most efficient robot or drone based on location and urgency.",
      icon: <Timer className="w-8 h-8" />
    },
    {
      title: "Seamless Delivery",
      description: "The robot or drone navigates to the destination, avoiding obstacles and ensuring safe delivery.",
      icon: <Truck className="w-8 h-8" />
    },
    {
      title: "Confirmation",
      description: "Recipients receive real-time notifications and confirm delivery via secure access codes.",
      icon: <Bell className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple, efficient, and reliable delivery process</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="text-blue-600 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-blue-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default HowItWorks;
