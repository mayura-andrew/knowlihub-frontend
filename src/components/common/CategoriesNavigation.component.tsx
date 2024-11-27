import React, { useState, useEffect } from 'react';
import { Tag, CheckSquare, Square, Sliders, Star, Zap, TrendingUp } from 'lucide-react';

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
  const [selectMode, setSelectMode] = useState(false);

  // Filter categories based on search term
  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  // Category selection handler
  const handleCategoryToggle = (category: Category) => {
    onCategoryChange(category);
  };

  // Select all or deselect all categories
  const toggleSelectAll = () => {
    if (selectedCategories.length === categories.length) {
      // Deselect all
      categories.forEach(category => {
        if (selectedCategories.some((c) => c.id === category.id)) {
          onCategoryChange(category);
        }
      });
    } else {
      // Select all
      categories.forEach(category => {
        if (!selectedCategories.some((c) => c.id === category.id)) {
          onCategoryChange(category);
        }
      });
    }
  };

  // Featured categories with enhanced visual design
  const featuredCategories = [
    {
      id: 'top-recommendations',
      name: 'Top Recommendations',
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
    },
    {
      id: 'trending',
      name: 'Trending',
      icon: <TrendingUp className="text-red-500" />,
      gradient: 'from-red-100 to-red-200',
      borderColor: 'border-red-300',
      textColor: 'text-red-800'
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

        {/* Bulk Actions */}
        <div className="flex justify-between items-center">
          <button 
            onClick={toggleSelectAll}
            className="flex items-center text-[#007BFF] hover:bg-[#007BFF]/10 
            px-3 py-1 rounded-md transition-colors"
          >
            {selectedCategories.length === categories.length ? (
              <>
                <CheckSquare className="mr-2" size={16} />
                Deselect All
              </>
            ) : (
              <>
                <Square className="mr-2" size={16} />
                Select All
              </>
            )}
          </button>
          <button 
            onClick={() => setSelectMode(!selectMode)}
            className="flex items-center text-[#495057] hover:bg-gray-100 
            px-3 py-1 rounded-md transition-colors"
          >
            <Sliders className="mr-2" size={16} />
            {selectMode ? 'Exit' : 'Bulk Select'}
          </button>
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
