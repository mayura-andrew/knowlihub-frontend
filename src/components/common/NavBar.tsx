import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  user?: {
    name: string;
    avatar: string;
  };
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  user, 
  onLogout 
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span>🧠</span>
              <span className="ml-2 text-xl font-bold text-gray-800">
                Knowlihub
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md flex items-center"
            >
              <span className="mr-2">🏠</span> Home
            </Link>
            <Link 
              to="/explore" 
              className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md flex items-center"
            >
              <span className="mr-2">🔍</span> Explore
            </Link>
            <Link 
              to="/create" 
              className="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md flex items-center"
            >
              <span className="mr-2">➕</span> Share New Resource
            </Link>
          </div>

          {/* User Profile Section */}
          <div className="flex items-center">
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center focus:outline-none"
                >
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <span className="text-gray-700 text-sm">{user.name}</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <span className="mr-2">👤</span> Profile
                    </Link>
                    <Link 
                      to="/settings" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <span className="mr-2">⚙️</span> Settings
                    </Link>
                    <button 
                      onClick={onLogout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <span className="mr-2">🚪</span> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link 
                  to="/login" 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
