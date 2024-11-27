import React, { useState } from 'react';
import Navbar from '../common/NavBar';
import User from '../../assets/user.svg';
import UserDashboardCards from '../common/UserDashboardCards';
import SidebarInfo from '../common/Footer.component';
import CategoriesNavigation from '../common/CategoriesNavigation.component';
const categories: Category[] = [
  { id: 'web-dev', name: 'Web Development' },
  { id: 'data-science', name: 'Data Science' },
  { id: 'machine-learning', name: 'Machine Learning' },
  { id: 'ai', name: 'Artificial Intelligence' },
  { id: 'mobile-dev', name: 'Mobile Development' },
  { id: 'game-dev', name: 'Game Development' },
  { id: 'cybersecurity', name: 'Cybersecurity' },
  { id: 'cloud-computing', name: 'Cloud Computing' },
  { id: 'devops', name: 'DevOps' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'quantum-computing', name: 'Quantum Computing' }
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

interface Category {
    id: string;
    name: string;
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

const studyTip = {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
};



const GlobalLayout: React.FC<GlobalLayoutProps> = ({ 
    children, 
    hideLeftSidebar = false, 
    hideRightSidebar = false 
}) => {
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    const handleCategoryChange = (category: Category) => {
      setSelectedCategories((prev) =>
        prev.some((c) => c.id === category.id)
          ? prev.filter((c) => c.id !== category.id)
          : [...prev, category]
      );
    };

    return (
        <div className="bg-white min-h-screen flex flex-col font-['Roboto']">
            {/* <Navbar user={userData.navUser} /> */}
            <Navbar />


            <div className="flex flex-1 mt-20 overflow-hidden">
                {/* Left Sidebar */}
                {!hideLeftSidebar && (
                  <aside className="w-64 bg-[#F8F9FA] border-r border-[#DEE2E6] overflow-y-auto max-h-auto custom-scrollbar p-4 shadow-sm">
                    <CategoriesNavigation
                      categories={categories}
                      selectedCategories={selectedCategories}
                      onCategoryChange={handleCategoryChange} 
                     
                    />
                
                    <div className="border-t border-[#DEE2E6] my-6" />
                
                  </aside>
                )}

                {/* Main Content */}
                <main className={`flex-1 flex flex-col bg-white ${hideLeftSidebar && !hideRightSidebar ? 'ml-0' : ''} ${!hideLeftSidebar && hideRightSidebar ? 'mr-0' : ''}`}>
                <div 
                        className="flex-1 p-4 overflow-y-auto custom-scrollbar"
                        style={{
                            maxHeight: 'calc(100vh - 5rem)', // Subtract navbar height
                            scrollbarWidth: 'thin', // For Firefox
                            scrollbarColor: '#007BFF #F8F9FA' // Thumb and track color
                        }}
                    >
                    {children}
                  </div>
                </main>

                {/* Right Sidebar */}
                {!hideRightSidebar && (
                    <aside className="w-64 bg-[#F8F9FA] border-l border-[#DEE2E6] overflow-y-auto max-h-[100vh-5rem] custom-scrollbar p-1">
                        {/* User Dashboard Cards */}
                        <UserDashboardCards
                            isLoggedIn={false}
                            navUser={userData.navUser}
                            levelInfo={userData.levelInfo}
                            nextLevelInfo={userData.nextLevelInfo}
                            activity={userData.activity}
                            studyTip={studyTip}
                            featuredUsers={featuredUsers} />
                        </aside>
                )}
            </div>

            {/* Footer */}

            <SidebarInfo 
            />
        </div>
    );
};

export default GlobalLayout;