import React, { useState } from 'react';
import Navbar from '../common/NavBar';
import User from '../../assets/user.svg';

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
];

const featuredUsers = [
    { name: 'John Doe', expertise: 'Web Dev', avatar: User },
    { name: 'Jane Smith', expertise: 'Data Science', avatar: User },
    { name: 'Mike Johnson', expertise: 'Design', avatar: User },
    { name: 'Sarah Brown', expertise: 'Machine Learning', avatar: User },
    { name: 'Alex Thompson', expertise: 'Cybersecurity', avatar: User }   
];

interface GlobalLayoutProps {
    children: React.ReactNode;
    hideLeftSidebar?: boolean;
    hideRightSidebar?: boolean;
}

const navUser = {
    name: 'John Doe',
    avatar: User,
    rank: 5, // Example rank
    level: 3, // Example level
    points: 150, // Example points
    nextLevelPoints: 200 // Points needed for the next level
};

const levelInfo = {
    1: { title: 'Beginner', color: 'bg-green-200', emoji: '🌱' },
    2: { title: 'Intermediate', color: 'bg-yellow-200', emoji: '🌿' },
    3: { title: 'Advanced', color: 'bg-blue-200', emoji: '🌳' },
    4: { title: 'Expert', color: 'bg-purple-200', emoji: '🌟' },
    5: { title: 'Master', color: 'bg-red-200', emoji: '🔥' }
}[navUser.level];

const nextLevelInfo = {
    4: { title: 'Expert', color: 'bg-purple-200', emoji: '🌟' },
    5: { title: 'Master', color: 'bg-red-200', emoji: '🔥' }
}[navUser.level + 1];

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children, hideLeftSidebar = false, hideRightSidebar = false }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar user={navUser} />
            
            <div className="flex flex-1 mt-6">
                {/** Left Sidebar */}
                {!hideLeftSidebar && (
                    <aside className='w-64 bg-gray-50 p-4 border-r overflow-y-auto h-screen custom-scrollbar'>
                        <h3 className='text-base font-semibold mb-4 text-gray-800 flex items-center'>
                            <span className='mr-2'>🗂️</span> Categories
                        </h3>
                        <ul className='space-y-2'>
                            <li className="text-sm text-gray-600 hover:bg-blue-50 p-2 rounded cursor-pointer flex items-center">
                                <span className='mr-2'>⭐</span> Top Recommendations
                            </li>
                            <li className="text-sm text-gray-600 hover:bg-blue-50 p-2 rounded cursor-pointer flex items-center">
                                <span className='mr-2'>🆕</span> Latest
                            </li>
                            {categories.map((category, index) => (
                                <li key={index} className="text-sm text-gray-600 hover:bg-blue-50 p-2 rounded cursor-pointer flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                    />
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
                    {/* Main Content */}
                    <div className="flex-1">
                        {children}
                    </div>
                </main>

                {/** Right Sidebar - Featured Users */}
                {!hideRightSidebar && (
                    <aside className="w-64 bg-gray-50 p-4 border-l h-screen custom-scrollbar">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-center mb-4">
                            <span className="mr-2">👤</span> Top Contributors
                        </h3>
                        <ul className="space-y-3 max-h-32 overflow-y-auto custom-scrollbar">
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

                        <div className="my-4 border-t border-gray-300"></div>

                        {/** Current User Rank Section */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-center mb-4">
                                <span className="mr-2">🏆</span> Your Rank 
                                <span className="text-sm bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full px-3 py-1 ml-2 font-bold shadow-md hover:shadow-lg transition-shadow duration-300">
                                    {navUser.rank}
                                </span>
                            </h3>
                            <div className="flex flex-col items-center">
                                <div 
                                    className={`px-3 py-1 text-sm rounded-full ${levelInfo?.color} shadow-md hover:shadow-lg transition-shadow duration-300`}
                                    title={`Level ${navUser.level}`}
                                >
                                    {levelInfo?.emoji} {levelInfo?.title}
                                </div>
                                {nextLevelInfo && (
                                    <div className="mt-4 text-sm text-gray-500">
                                        <p>Next Level: <span className="font-semibold text-gray-700">{nextLevelInfo.emoji} {nextLevelInfo.title}</span></p>
                                        <p>Points needed: <span className="font-semibold text-gray-700">{navUser.nextLevelPoints - navUser.points}</span></p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="my-4 border-t border-gray-300"></div>

                        {/** Current Activity Status Section */}
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 flex items-center justify-center mb-4">
                                <span className="mr-2">📊</span> Current Activity
                            </h3>
                            <div className="mt-3 flex items-center">
                                <div>
                                    <p className="text-sm text-gray-500">Shared Resource: "Complete React Developer Course"</p>
                                    <p className="text-sm text-gray-500">Status: <span className="font-semibold text-yellow-500">Pending Approval</span></p>
                                    <p className="text-xs text-gray-500 mt-2">*Admin approval required for the resource to be published.</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                )}
            </div>
        </div>
    );
};

export default GlobalLayout;