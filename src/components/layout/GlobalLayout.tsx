import React, { useState } from 'react';
import Navbar from '../common/NavBar';
import User from '../../assets/user.svg';
import AuthorInfo from '../common/AuthorInfo.component';
import UserDashboardCards from '../common/UserDashboardCards';

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
    { name: 'John Doe', expertise: 'Web Dev', avatar: User, level: 3 },
    { name: 'Jane Smith', expertise: 'Data Science', avatar: User, level: 5 },
    { name: 'Mike Johnson', expertise: 'Design', avatar: User, level: 2 },
    { name: 'Sarah Brown', expertise: 'Machine Learning', avatar: User, level: 4 },
    { name: 'Alex Thompson', expertise: 'Cybersecurity', avatar: User, level: 6 }   
];

interface GlobalLayoutProps {
    children: React.ReactNode;
    hideLeftSidebar?: boolean;
    hideRightSidebar?: boolean;
}

// Move user data to a separate object for better organization
const userData = {
    navUser: {
        name: 'John Doe',
        avatar: User,
        rank: 5,
        level: 3,
        points: 150,
        nextLevelPoints: 200
    },
    levelInfo: {
        emoji: '🔬',
        title: 'Advanced',
        color: 'bg-[#007BFF]/10 text-[#007BFF]'
    },
    nextLevelInfo: {
        emoji: '🚀',
        title: 'Expert'
    },
    activity: {
        date: '2023-10-01', // Example date
        resource: 'Complete React Developer Course', // Example resource
        status: 'Pending Approval',
        type: 'Resource'
    }
};

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ 
    children, 
    hideLeftSidebar = false, 
    hideRightSidebar = false 
}) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className="bg-white min-h-screen flex flex-col font-['Inter']">
            <Navbar user={userData.navUser} />
            
            <div className="flex flex-1 mt-12">
                {/* Left Sidebar */}
                {!hideLeftSidebar && (
                    <aside className="w-64 bg-[#F8F9FA] p-4 border-r border-[#DEE2E6] overflow-y-auto h-screen custom-scrollbar">
                        <h3 className="text-lg font-semibold mb-4 text-[#212529] flex items-center">
                            <span className="mr-2">🗂️</span> Categories
                        </h3>
                        <ul className="space-y-2">
                            <li className="text-sm text-[#495057] hover:bg-[#007BFF]/10 p-2 rounded cursor-pointer flex items-center">
                                <span className="mr-2">⭐</span> Top Recommendations
                            </li>
                            <li className="text-sm text-[#495057] hover:bg-[#007BFF]/10 p-2 rounded cursor-pointer flex items-center">
                                <span className="mr-2">🆕</span> Latest
                            </li>
                            {categories.map((category, index) => (
                                <li 
                                    key={index} 
                                    className="text-sm text-[#495057] hover:bg-[#007BFF]/10 p-2 rounded cursor-pointer flex items-center"
                                >
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                    />
                                    <span className="mr-2">📚</span>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}

                {/* Main Content */}
                <main className={`flex-1 flex flex-col bg-white p-6 ${
                    hideLeftSidebar && !hideRightSidebar ? 'ml-0' : ''
                } ${!hideLeftSidebar && hideRightSidebar ? 'mr-0' : ''}`}>
                    <div className="flex-1">
                        {children}
                    </div>
                </main>

                {/* Right Sidebar */}
                {!hideRightSidebar && (
                    <aside className="w-64 bg-[#F8F9FA] p-4 border-l border-[#DEE2E6] h-screen custom-scrollbar">
                        {/* Top Contributors Section */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-[#212529] flex items-center justify-center mb-4">
                                <span className="mr-2">👤</span> Top Contributors
                            </h3>
                            <ul className="space-y-2 max-h-32 overflow-y-auto custom-scrollbar">
                                {featuredUsers.map((user, index) => (
                                    <AuthorInfo 
                                        key={index}
                                        avatar={user.avatar} 
                                        name={user.name} 
                                        level={user.level} 
                                        position={user.expertise} 
                                        profileLink={`/profile/${user.name}`} 
                                        size="small"
                                        showFollowButton={false}
                                        // rank={index + 1} // Pass the rank prop
                                    />
                                ))}
                            </ul>
                        </div>

                        <div className="border-t border-[#DEE2E6] my-6" />

                        {/* User Dashboard Cards */}
                        <UserDashboardCards 
                            navUser={userData.navUser}
                            levelInfo={userData.levelInfo}
                            nextLevelInfo={userData.nextLevelInfo}
                            activity={userData.activity}
                        />
                    </aside>
                )}
            </div>
        </div>
    );
};

export default GlobalLayout;