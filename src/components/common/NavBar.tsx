import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Plus, Link as LinkIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [resourceForm, setResourceForm] = useState({
    title: '',
    url: '',
    description: ''
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const handleShareSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sharing resource:', resourceForm);
    setShareModalOpen(false);
    setResourceForm({ title: '', url: '', description: '' });
  };

  return (
    <>
      <nav className="bg-white border-b border-[#DEE2E6] fixed top-0 left-0 right-0 z-50 font-['Roboto']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <span className="text-2xl">🧠</span>
                <span className="ml-2 text-2xl font-semibold text-[#212529] group-hover:text-[#007BFF] transition-colors">
                  Knowlihub
                </span>
              </Link>
            </div>

            {/* Centered Search Bar */}
            <div className="flex-grow mx-8">
              <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Explore knowledge..."
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

            {/* User Profile Section */}
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Button
                    onClick={() => setShareModalOpen(true)}
                    className="px-4 py-2 rounded-full bg-[#007BFF] text-white border border-[#007BFF]
                             hover:bg-[#0056b3] transition-all duration-300 flex items-center space-x-2"
                  >
                    <Plus size={18} />
                    <span>Share Resource</span>
                  </Button>
                  <div className="relative">
                    <button 
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center space-x-3 focus:outline-none group"
                    >
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="h-10 w-10 rounded-full ring-2 ring-[#007BFF]/10 group-hover:ring-[#007BFF]/30 transition-all"
                      />
                      <span className="text-[#212529] font-medium">{user.name}</span>
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
                          onClick={onLogout}
                          className="w-full text-left px-4 py-2.5 text-[#DC3545] hover:bg-[#F8F9FA] flex items-center"
                        >
                          <span className="mr-3">🚪</span> Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link to="/login">
                    <Button 
                      className="px-6 py-2 rounded-full bg-white text-[#007BFF] border border-[#007BFF] 
                               hover:bg-[#007BFF] hover:text-white transition-all duration-300"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button 
                      className="px-6 py-2 rounded-full bg-[#007BFF] text-white border border-[#007BFF]
                               hover:bg-[#0056b3] transition-all duration-300"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Share Resource Modal */}
      <Dialog open={shareModalOpen} onOpenChange={setShareModalOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">Share New Resource</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleShareSubmit} className="space-y-6">
            <FormField
              name="title"
              render={() => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter resource title"
                      value={resourceForm.title}
                      onChange={(e) => setResourceForm(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="url"
              render={() => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="https://"
                        value={resourceForm.url}
                        onChange={(e) => setResourceForm(prev => ({ ...prev, url: e.target.value }))}
                        className="w-full pl-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              render={() => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the resource..."
                      value={resourceForm.description}
                      onChange={(e) => setResourceForm(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShareModalOpen(false)}
                className="mr-2"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-[#007BFF] text-white hover:bg-[#0056b3]"
              >
                Share Resource
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
