import React, { useState, useEffect } from 'react';
import { Tag, Star, Zap, X } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
  count?: number;
}

interface CategoriesNavigationProps {
  categories: Category[];
  selectedCategories: Category[];
  onCategoryChange: (category: Category) => void;
}

const CategoriesNavigation: React.FC<CategoriesNavigationProps> = ({
  categories,
  selectedCategories,
  onCategoryChange
}) => {
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(categories);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter categories based on search term
  useEffect(() => {
    const filtered = categories.filter(category => 
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchTerm, categories]);

  // Category selection handler
  const handleCategoryToggle = (category: Category) => {
    onCategoryChange(category);
  };

  // Clear all selected categories
  const clearAll = () => {
    selectedCategories.forEach(category => {
      onCategoryChange(category);
    });
  };

  // Featured categories with enhanced visual design
  const featuredCategories = [
    {
      id: 'editors-pick',
      name: "Editor's Picks",
      icon: <Star className="text-yellow-500" />,
      gradient: 'from-yellow-100 to-yellow-200',
      borderColor: 'border-yellow-300',
      textColor: 'text-yellow-800'
    },
    {
      id: 'latest',
      name: 'Latest',
      icon: <Zap className="text-blue-500" />,
      gradient: 'from-blue-100 to-blue-200',
      borderColor: 'border-blue-300',
      textColor: 'text-blue-800'
    }
  ];

  return (
    <div 
      className="bg-white rounded-2xl shadow-xl border border-gray-100 
      transition-all duration-300 ease-in-out"
      style={{ 
        fontFamily: 'Roboto, sans-serif',
        maxWidth: '320px',
        width: '100%'
      }}
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between p-4 
        hover:bg-[#007BFF]/5 transition-colors"
      >
        <div className="flex items-center">
          <Tag className="mr-3 text-[#007BFF]" size={24} />
          <h3 className="text-lg font-bold text-[#212529]">
            Categories
          </h3>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Featured Categories */}
        <div className="space-y-2">
          {featuredCategories.map((featCategory) => (
            <div 
              key={featCategory.id}
              className={`text-base ${featCategory.textColor} border ${featCategory.borderColor} 
              bg-gradient-to-r ${featCategory.gradient} 
              hover:from-opacity-40 hover:to-opacity-60 
              p-3 rounded-lg cursor-pointer flex items-center 
              transition-transform transform hover:scale-105 
              duration-200 shadow-md`}
            >
              {featCategory.icon}
              <span className="ml-2 font-semibold">{featCategory.name}</span>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 text-sm border border-[#DEE2E6] rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] transition-all"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#6C757D] hover:text-[#212529] transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category List */}
        <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
          {filteredCategories.map((category) => (
            <div 
              key={category.id}
              className="flex items-center justify-between 
              p-2 rounded-lg hover:bg-[#007BFF]/5 
              transition-colors"
            >
              <label className="flex items-center flex-grow cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-3 accent-[#007BFF]"
                  checked={selectedCategories.some((c) => c.id === category.id)}
                  onChange={() => handleCategoryToggle(category)}
                />
                {category.icon && <span className="mr-2">{category.icon}</span>}
                <span className="text-[#495057] flex-grow">
                  {category.name}
                </span>
              </label>
              {category.count !== undefined && (
                <span className="text-[#6C757D] text-sm ml-2">
                  ({category.count})
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Clear All Button */}
        {selectedCategories.length > 0 && (
          <div className="flex justify-end">
            <button 
              onClick={clearAll}
              className="flex items-center text-[#DC3545] hover:bg-[#DC3545]/10 
              px-3 py-1 rounded-md transition-colors"
            >
              <X className="mr-2" size={16} />
              Clear All
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center text-[#6C757D] py-4">
            No categories found
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesNavigation;