import { Search } from 'lucide-react';
import React, { useState } from 'react';

interface SearchBarProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search...',
    onSearch,
    size = 'medium',
    className = '',
}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchQuery);
        }
    }

    const sizeClasses = {
        small: 'p-2 text-sm',
        medium: 'p-3 text-base',
        large: 'p-4 text-lg',
    }

    return (
        <div className={`relative w-full ${className}`}>
            <input 
                type='text'
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className={`
                    w-full 
                    pl-10 
                    border 
                    border-gray-300 
                    rounded-lg 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-blue-500 
                    ${sizeClasses[size]}
                  `}
                  />
            <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={20} 
            />
        </div>
    )
}

export default SearchBar;
