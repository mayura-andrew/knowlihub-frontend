import React, { useState } from 'react';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  ArrowRight, 
  Send 
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Roadmap', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Community', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Contact', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Github, href: '#' },
    { icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-white border-t border-[#DEE2E6] py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-8">
        {/* Brand Section */}
        <div className="md:col-span-4">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-3xl">🧠</span>
            <h2 
              className="text-xl font-bold text-[#212529]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Knowlihub
            </h2>
          </div>
          <p 
            className="text-[#495057] text-sm mb-6"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Empowering developers with collaborative tools and innovative solutions to accelerate learning and development.
          </p>
          
          {/* Newsletter */}
          <div className="bg-[#F8F9FA] p-4 rounded-lg">
            <h3 
              className="text-[#212529] font-semibold mb-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Stay Ahead of the Curve
            </h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pr-12 text-sm border border-[#DEE2E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              />
              <button 
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#007BFF] text-white p-2 rounded-md hover:bg-[#0056b3] transition-colors"
                onClick={() => console.log('Newsletter signup:', email)}
              >
                <Send size={18} />
              </button>
            </div>
            <p 
              className="text-xs text-[#495057] mt-2"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Join 50,000+ developers getting weekly updates
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="md:col-span-6 grid grid-cols-3 gap-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 
                className="text-[#212529] font-bold mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-[#495057] text-sm hover:text-[#007BFF] flex items-center transition-colors group"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {link.name}
                      <ArrowRight 
                        size={14} 
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#007BFF]" 
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social and Legal */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <h4 
              className="text-[#212529] font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
            >
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-[#495057] hover:text-[#007BFF] transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="md:col-span-12 border-t border-[#DEE2E6] pt-6 mt-6 text-center">
          <div className="flex flex-wrap justify-center space-x-4 mb-3">
            <a 
              href="#" 
              className="text-[#495057] text-xs hover:text-[#007BFF]"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-[#495057] text-xs hover:text-[#007BFF]"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-[#495057] text-xs hover:text-[#007BFF]"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Cookie Settings
            </a>
          </div>
          <p 
            className="text-[#495057] text-xs"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            © {new Date().getFullYear()} Knowlihub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
