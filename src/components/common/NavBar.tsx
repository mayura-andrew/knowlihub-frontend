import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Plus, Users, BookOpen, User } from 'lucide-react';
import ShareResourceModal from '../features/ShareResourceModal.component';
import AuthModal from './AuthModal.component';
import { AuthContext } from '@/context/AuthContext';

const Navbar: React.FC = () => {
  const { isSignedIn, user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const openAuthModal = () => {
    setAuthModalOpen(true);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="bg-white border-b border-[#DEE2E6] fixed top-0 left-0 right-0 z-50 font-['Roboto']">
        <div className="max-w-12xl mx-auto px-1 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex group">
                <span className="text-2xl">🧠</span>
                <span className="ml-2 text-2xl font-semibold text-[#212529] group-hover:text-[#007BFF] transition-colors">
                  Knowlihub
                </span>
                <span className="items-center px-1 py-1 text-xs font-thin text-black italic rounded-full">
                  Experimental
                </span>
              </Link>
            </div>

            {/* Centered Search Bar */}
            <div className="flex-grow mx-4">
              <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-6 py-3 border border-[#DEE2E6] rounded-full text-[#495057] placeholder-[#6C757D] 
                           focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent
                           transition-all duration-300 text-base"
                />
                <button 
                  type="submit" 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6C757D] hover:text-[#007BFF] transition-colors"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>

            {/* Section Links */}
            {!isSignedIn && (
              <div className="hidden md:flex items-center space-x-4">
                <a href="#benefits" onClick={(e) => handleScroll(e, 'benefits')} className="text-[#495057] hover:text-[#007BFF] transition-colors">Benefits</a>
                <a href="#howitworks" onClick={(e) => handleScroll(e, 'howitworks')} className="text-[#495057] hover:text-[#007BFF] transition-colors">How It Works</a>
                <a href="#explore" onClick={(e) => handleScroll(e, 'explore')} className="text-[#495057] hover:text-[#007BFF] transition-colors">Explore</a>
                <a href="#trending" onClick={(e) => handleScroll(e, 'trending')} className="text-[#495057] hover:text-[#007BFF] transition-colors">Trending</a>
                <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-[#495057] hover:text-[#007BFF] transition-colors">Features</a>
                <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="text-[#495057] hover:text-[#007BFF] transition-colors">Testimonials</a>
                <a href="#help" onClick={(e) => handleScroll(e, 'help')} className="text-[#495057] hover:text-[#007BFF] transition-colors">Help</a>
              </div>
            )}

            {/* User Profile Section */}
            <div className="flex items-center space-x-4 ml-4">
              {isSignedIn ? (
                <>
                  <Button
                    onClick={() => setShareModalOpen(true)}
                    className="px-2 py-2 rounded-full bg-[#007BFF] text-white border border-[#007BFF]
                             hover:bg-[#0056b3] transition-all duration-300 flex items-center space-x-2"
                  >
                    <Plus size={18} />
                    <span>Share Resource</span>
                  </Button>
                  <Link to="/people" className="text-[#495057] hover:text-[#007BFF] transition-colors flex items-center space-x-2">
                    <Users size={18} />
                    <span>People</span>
                  </Link>
                  <Link to="/learning-paths" className="text-[#495057] hover:text-[#007BFF] transition-colors flex items-center space-x-2">
                    <BookOpen size={18} />
                    <span>Learning Paths</span>
                  </Link>
                  <Link to="/profile" className="text-[#495057] hover:text-[#007BFF] transition-colors flex items-center space-x-2">
                    <User size={18} />
                    <span>Profile</span>
                  </Link>
                  <div className="relative">
                    <button 
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center space-x-3 focus:outline-none group"
                    >
                      <img 
                        src={user?.avatar} 
                        alt={user?.name} 
                        className="h-10 w-10 rounded-full ring-2 ring-[#007BFF]/10 group-hover:ring-[#007BFF]/30 transition-all"
                      />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white border border-[#DEE2E6] rounded-lg shadow-lg py-1">
                        <Link 
                          to="/profile" 
                          className="block px-4 py-2.5 text-[#495057] hover:bg-[#F8F9FA] flex items-center"
                        >
                          <span className="mr-3">👤</span> Profile
                        </Link>
                        <Link 
                          to="/settings" 
                          className="block px-4 py-2.5 text-[#495057] hover:bg-[#F8F9FA] flex items-center"
                        >
                          <span className="mr-3">⚙️</span> Settings
                        </Link>
                        <hr className="my-1 border-[#DEE2E6]" />
                        <button 
                          onClick={logout}
                          className="w-full text-left px-4 py-2.5 text-[#DC3545] hover:bg-[#F8F9FA] flex items-center"
                        >
                          <span className="mr-3">🚪</span> Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-3 ml-6">
                  <Button 
                    className="px-6 py-2 rounded-full bg-[#007BFF] text-white border border-[#007BFF]
                             hover:bg-[#0056b3] transition-all duration-300"
                    onClick={() => openAuthModal()}
                  >
                    Join Now
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Share Resource Modal */}
      <ShareResourceModal open={shareModalOpen} onOpenChange={() => setShareModalOpen(false)} />

      {/* Auth Modal */}
      <AuthModal open={authModalOpen} onOpenChange={() => setAuthModalOpen(false)} />
    </>
  );
}

export default Navbar;