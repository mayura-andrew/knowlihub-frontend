import React from 'react';
import SearchBar from '../common/SearchBar';
import Navbar from '../common/NavBar';

const categories = [
    "Web Development",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Mobile Development",
    "Game Development",
    "Cybersecurity",
    "Cloud Computing",
    "DevOps",
    "Blockchain",
    "Quantum Computing"
]

const featuredUsers = [
    { name: 'John Doe', expertise: 'Web Dev', avatar: '/assets/user.svg' },
    { name: 'Jane Smith', expertise: 'Data Science', avatar: '/assets/user.svg' },
    { name: 'Mike Johnson', expertise: 'Design', avatar: '/assets/user.svg' }   
]

interface GlobalLayoutProps {
    children: React.ReactNode;
    hideLeftSidebar?: boolean;
    hideRightSidebar?: boolean;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children, hideLeftSidebar = false, hideRightSidebar = false }) => {
    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
    }

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />
            
            <div className="flex flex-1 mt-6">
                {/** Left Sidebar */}
                {!hideLeftSidebar && (
                    <aside className='w-64 bg-gray-50 p-4 border-r overflow-y-auto'>
                        <h3 className='text-lg font-bold mb-4 text-gray-800 flex items-center'>
                            <span className='mr-2'>🗂️</span> Categories
                        </h3>
                        <ul className='space-y-2'>
                            <li className="text-gray-600 hover:bg-blue-50 p-2 rounded cursor-pointer flex items-center">
                                <span className='mr-2'>⭐</span> Top Recommendations
                            </li>
                            <li className="text-gray-600 hover:bg-blue-50 p-2 rounded cursor-pointer flex items-center">
                                <span className='mr-2'>🆕</span> Latest
                            </li>
                            {categories.map((category, index) => (
                                <li key={index} className="text-gray-600 hover:bg-blue-50 p-2 rounded cursor-pointer flex items-center">
                                    <span className='mr-2'>📚</span>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}

                {/** Main Content */}
                <main className={`flex-1 flex flex-col bg-white p-6 ${hideLeftSidebar && !hideRightSidebar ? 'ml-0' : ''} 
                    ${!hideLeftSidebar && hideRightSidebar ? 'mr-0' : ''}
                `}>
                    {/* Search Bar */}
                    <div className='mb-6'>
                        <SearchBar placeholder='Search learning resources...' onSearch={handleSearch} size='medium' />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {children}
                    </div>
                </main>

                {/** Right Sidebar - Featured Users */}
                {!hideRightSidebar && (
                    <aside className="w-64 bg-gray-50 p-4 border-l overflow-y-auto">
                        <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center">
                            <span className="mr-2">👤</span> Top Contributors
                        </h3>
                        <ul className="space-y-3">
                            {featuredUsers.map((user) => (
                                <li key={user.name} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                                    <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-3" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{user.name}</h4>
                                        <p className="text-xs text-gray-500">{user.expertise}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}
            </div>
        </div>
    )
}

export default GlobalLayout;