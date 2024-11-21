import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Comprehensive Level System
const getUserLevelInfo = (level: number): { 
  emoji: string; 
  title: string; 
  color: string 
} => {
  if (level < 2) return { 
    emoji: '🌱', 
    title: 'Novice', 
    color: 'bg-gray-100 text-gray-600' 
  };
  if (level < 4) return { 
    emoji: '🌿', 
    title: 'Learner', 
    color: 'bg-blue-100 text-blue-700' 
  };
  if (level < 6) return { 
    emoji: '🔬', 
    title: 'Explorer', 
    color: 'bg-green-100 text-green-700' 
  };
  if (level < 8) return { 
    emoji: '🚀', 
    title: 'Advanced', 
    color: 'bg-purple-100 text-purple-700' 
  };
  if (level < 10) return { 
    emoji: '🏅', 
    title: 'Expert', 
    color: 'bg-yellow-100 text-yellow-700' 
  };
  return { 
    emoji: '🌟', 
    title: 'Master', 
    color: 'bg-orange-100 text-orange-700' 
  };
};

interface AuthorInfoProps {
  avatar: string;
  position: string;
  name: string;
  level: number;
  profileLink: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({
  avatar,
  name,
  level,
  position,
  profileLink,
}) => {
  const levelInfo = getUserLevelInfo(level);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFollowing(true);
    // TODO: Implement follow functionality
    console.log(`Following ${name}`);
  };

  return (
    <div className="flex items-center mb-3 no-underline hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200 bg-gray-50">
      <Link to={profileLink} className="font-semibold text-gray-800 hover:underline cursor-pointer">
      <div className="relative">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full mr-3"
        />
      </div>
      </Link>
      <div className='text-left'>
        <Link to={profileLink} className="font-semibold text-gray-800 hover:underline cursor-pointer">
          {name}
        </Link>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
      <div 
        className={`ml-3 px-2 py-1 text-xs rounded-full ${levelInfo.color} shadow-md`}
        title={`Level ${level}`}
      >
        {levelInfo.emoji} {levelInfo.title}
      </div>
      <button
        onClick={handleFollow}
        className={`ml-2 px-2 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
          isFollowing ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-blue-500 border border-blue-500 hover:bg-blue-100'
        }`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default AuthorInfo;