import React from 'react';
import { LucideProps } from 'lucide-react';

interface SidebarInfoProps {
  socialLinks: { Icon: React.ComponentType<LucideProps>; href: string }[];
  footerLinks: { [category: string]: { name: string; href: string }[] };
  currentYear: number;
}

const SidebarInfo: React.FC<SidebarInfoProps> = ({ socialLinks, footerLinks, currentYear }) => {
  return (
    <div>
      {/* Project Information */}
      <div className="mt-6">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl">🧠</span>
          <h2 className="text-lg font-bold text-gray-800">Knowlihub</h2>
        </div>
        <p className="text-gray-600 text-sm">
          Empowering developers worldwide to collaborate, learn, and build innovative solutions.
        </p>

        {/* Social Links */}
        <div className="flex space-x-3 mt-4">
          {socialLinks.map(({ Icon, href }, index) => (
            <a 
              key={index} 
              href={href} 
              className="text-gray-600 hover:text-blue-500 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-6">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">{category}</h4>
            <ul className="space-y-2">
              {links.map(({ name, href }) => (
                <li key={name}>
                  <a 
                    href={href} 
                    className="text-gray-600 text-sm hover:text-blue-500 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-[#DEE2E6] pt-4 mt-4">
        <p className="text-xs text-[#495057]">
          Subscribe for latest updates and insights
        </p>
        <div className="relative mt-2">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 border border-[#DEE2E6] rounded-lg text-sm focus:outline-[#007BFF]"
          />
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#007BFF] text-white p-1.5 rounded-md hover:bg-[#0056b3] transition-colors"
          >
            ✉️
          </button>
        </div>
        <p className="text-xs text-[#495057] mt-2">
          © {currentYear} Knowlihub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SidebarInfo;