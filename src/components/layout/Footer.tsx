import React, { useState } from 'react';
import { 
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscriptionStatus('success');
  };

  const footerLinks = {
    "Company": [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#" }
    ],
    "Products": [
      { label: "Platform Overview", href: "#" },
      { label: "Satellite Imaging", href: "#" },
      { label: "Soil Sensors", href: "#" },
      { label: "Weather Integration", href: "#" }
    ],
    "Resources": [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Whitepapers", href: "#" },
      { label: "Support", href: "#" }
    ],
    "Legal": [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-green-600 rounded-2xl p-8 mb-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(30deg,#22c55e20_4%,#22c55e10_50%,transparent_100%)]" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated with AgriSense
              </h3>
              <p className="text-green-100">
                Subscribe to our newsletter for the latest agricultural insights and platform updates.
              </p>
            </div>
            <div>
              {subscriptionStatus === 'success' ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <p className="text-lg font-medium">Thank you for subscribing!</p>
                  <p className="text-green-100">You'll receive our next newsletter soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-white/40 focus:border-transparent placeholder-green-100"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center space-x-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-bold mb-6">AgriSense Solutions</h4>
            <p className="text-gray-400 mb-6">
              Revolutionizing agriculture with precision technology and data-driven insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-centerhover:bg-gray-700 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([section, links], index) => (
            <div key={index}>
              <h5 className="text-xl font-semibold mb-4">{section}</h5>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} AgriSense Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
