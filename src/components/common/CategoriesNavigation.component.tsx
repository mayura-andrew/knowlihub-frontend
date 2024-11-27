import React, { useState, useEffect } from 'react';
import { Tag, ChevronRight, Search, X, CheckSquare, Square, Sliders } from 'lucide-react';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState<Category[]>(categories);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectMode, setSelectMode] = useState(false);

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

  return (
    <div 
      className="bg-white rounded-2xl shadow-xl border border-gray-100 
      transition-all duration-300 ease-in-out"
      style={{ 
        fontFamily: 'Roboto, sans-serif',
        maxWidth: '320px',
        width: isExpanded ? '100%' : 'auto'
      }}
    >
      {/* Header with Expand/Collapse */}
      <div 
        className="flex items-center justify-between p-4 cursor-pointer 
        hover:bg-[#007BFF]/5 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <Tag className="mr-3 text-[#007BFF]" size={24} />
          <h3 className="text-lg font-bold text-[#212529]">
            Categories
          </h3>
        </div>
        <ChevronRight 
          className={`text-[#495057] transition-transform ${
            isExpanded ? 'rotate-90' : ''
          }`} 
          size={20} 
        />
      </div>

      {isExpanded && (
        <div className="p-4 space-y-4">
          {/* Search and Filter Controls */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-[#495057]" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border border-[#DEE2E6] 
              rounded-lg focus:ring-2 focus:ring-[#007BFF]/50 
              focus:border-[#007BFF] transition-all"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="text-[#495057] hover:text-[#212529]" size={20} />
              </button>
            )}
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
      )}
    </div>
  );
};

export default CategoriesNavigation;