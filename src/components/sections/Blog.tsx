import React, { useState } from 'react';
import { BookOpen, Download, ChevronRight, Search, Filter } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

interface Resource {
  id: string;
  title: string;
  type: 'whitepaper' | 'guide' | 'report';
  description: string;
}

const ResourcesSection = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'resources'>('blog');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: "5 Ways Precision Agriculture is Reducing Water Waste",
      excerpt: "Discover how modern farming techniques are revolutionizing water conservation in agriculture...",
      category: "Sustainability",
      readTime: "5 min",
      date: "Feb 15, 2024"
    },
    {
      id: '2',
      title: "The Future of Farming: AI and Machine Learning",
      excerpt: "Explore how artificial intelligence is transforming traditional farming practices...",
      category: "Technology",
      readTime: "7 min",
      date: "Feb 12, 2024"
    },
    {
      id: '3',
      title: "Maximizing Crop Yields with Satellite Data",
      excerpt: "Learn how satellite imaging is helping farmers make better decisions...",
      category: "Innovation",
      readTime: "6 min",
      date: "Feb 10, 2024"
    }
  ];

  const resources: Resource[] = [
    {
      id: '1',
      title: "2024 Precision Agriculture Impact Report",
      type: 'whitepaper',
      description: "Comprehensive analysis of precision agriculture's impact on farm profitability"
    },
    {
      id: '2',
      title: "Soil Sensor Setup Guide",
      type: 'guide',
      description: "Step-by-step guide to installing and configuring your soil sensors"
    },
    {
      id: '3',
      title: "Weather Integration Handbook",
      type: 'report',
      description: "Learn how to leverage weather data for smarter farming decisions"
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Insights and Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest agricultural trends, techniques, and research
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-4 flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles and resources..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'blog' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('blog')}
              >
                Blog Posts
              </button>
              <button 
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'resources' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('resources')}
              >
                Resources
              </button>
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'blog' ? (
            // Blog Posts
            blogPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                <img 
  src={`https://picsum.photos/400/225?random=${post.id}`} 
  alt={post.title} 
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
/>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center text-green-600 font-medium group-hover:text-green-700">
                    Read More 
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            // Resources
            resources.map((resource) => (
              <div 
                key={resource.id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">Download</span>
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
  {resource.title}
</h3>

                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
