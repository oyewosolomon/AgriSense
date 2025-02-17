import React from 'react';
import { Lightbulb, Leaf, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const AboutUs = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Agricultural Officer",
      bio: "20+ years experience in agricultural science and precision farming technologies."
    },
    {
      name: "Mike Chen",
      role: "Head of Technology",
      bio: "Former Google engineer specializing in AI and machine learning for agriculture."
    },
    {
      name: "Emma Martinez",
      role: "Lead Agronomist",
      bio: "Expert in sustainable farming practices and crop optimization."
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of agri-tech.",
      image:"https://randomuser.me/api/portraits/woman/50.jpg"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability",
      description: "We're committed to eco-friendly farming practices.",
      image:"https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Your success is our success.",
      image:"https://randomuser.me/api/portraits/woman/50.jpg"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission: Empowering Farmers with Precision Agriculture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by a team of agri-tech experts and farmers, AgriSense Solutions 
            monitors over 500,000 acres, helping farmers increase productivity by an 
            average of 25%.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${index+1}.jpg`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-green-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;