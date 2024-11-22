import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const getUserLevelInfo = (level: number) => {
  if (level < 2) return {
    emoji: '🌱',
    title: 'Novice',
    color: 'bg-[#F8F9FA] text-[#495057]'
  };
  if (level < 4) return {
    emoji: '🌿',
    title: 'Learner',
    color: 'bg-[#007BFF]/10 text-[#0056b3]'
  };
  if (level < 6) return {
    emoji: '🔬',
    title: 'Explorer',
    color: 'bg-[#28A745]/10 text-[#28A745]'
  };
  if (level < 8) return {
    emoji: '🚀',
    title: 'Advanced',
    color: 'bg-[#17A2B8]/10 text-[#17A2B8]'
  };
  if (level < 10) return {
    emoji: '🏅',
    title: 'Expert',
    color: 'bg-[#FFC107]/10 text-[#FFC107]'
  };
  return {
    emoji: '🌟',
    title: 'Master',
    color: 'bg-[#DC3545]/10 text-[#DC3545]'
  };
};

interface AuthorInfoProps {
  avatar: string;
  name: string;
  level: number;
  position: string;
  profileLink: string;
  size?: 'small' | 'medium' | 'large';
  showFollowButton?: boolean;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({
  avatar,
  name,
  level,
  position,
  profileLink,
  size = 'medium',
  showFollowButton = true,
}) => {
  const levelInfo = getUserLevelInfo(level);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = (e) => {
    e.preventDefault();
    setIsFollowing(true);
    console.log(`Following ${name}`);
  };

  const sizeClasses = {
    small: {
      container: 'p-2',
      avatar: 'w-8 h-8',
      name: 'text-sm',
      position: 'text-xs',
      badge: 'text-[10px] px-1.5 py-0.5',
    },
    medium: {
      container: 'p-3',
      avatar: 'w-10 h-10',
      name: 'text-base',
      position: 'text-sm',
      badge: 'text-xs px-2 py-1',
    },
    large: {
      container: 'p-4',
      avatar: 'w-12 h-12',
      name: 'text-lg',
      position: 'text-base',
      badge: 'text-sm px-2.5 py-1.5',
    },
  };

  return (
    <div className={`
      flex items-center rounded-lg transition-colors duration-200
      bg-white border border-[#DEE2E6] hover:bg-[#F8F9FA]
      ${sizeClasses[size].container}
    `}>
      <Link 
        to={profileLink} 
        className="flex-shrink-0 rounded-full overflow-hidden ring-2 ring-[#007BFF]/10"
      >
        <img
          src={avatar}
          alt={name}
          className={`${sizeClasses[size].avatar} object-cover`}
        />
      </Link>
      
      <div className="ml-2.5 flex-1 min-w-0 text-left">
        <Link 
          to={profileLink} 
          className={`
            font-semibold text-[#212529] hover:text-[#007BFF]
            transition-colors duration-200 block truncate
            ${sizeClasses[size].name}
          `}
        >
          {name}
        </Link>
        <p className={`
          text-[#495057] truncate
          ${sizeClasses[size].position}
        `}>
          {position}
        </p>
      </div>

      <div className={`
        ml-2 flex-shrink-0 rounded-full
        ${levelInfo.color} ${sizeClasses[size].badge}
        font-medium shadow-sm
      `}>
        {levelInfo.emoji} {size !== 'small' && levelInfo.title}
      </div>

      {showFollowButton && size !== 'small' && (
        <button
          onClick={handleFollow}
          className={`
            ml-3 px-3 py-1 text-xs font-medium rounded-full
            transition-all duration-200 shadow-sm
            ${isFollowing 
              ? 'bg-[#007BFF] text-white hover:bg-[#0056b3]' 
              : 'text-[#007BFF] border border-[#007BFF] hover:bg-[#007BFF]/10'
            }
          `}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      )}
    </div>
  );
};

export default AuthorInfo;
