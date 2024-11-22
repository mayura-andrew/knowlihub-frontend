import React from 'react';
import RankCard from './RankCard.component';
import ActivityCard from './ActivityCard.component';

interface UserDashboardCardsProps {
  navUser: {
    name: string;
    avatar: string;
    rank: number;
    level: number;
    points: number;
    nextLevelPoints: number;
  };
  levelInfo: {
    title: string;
    color: string;
    emoji: string;
  };
  nextLevelInfo?: {
    title: string;
    emoji: string;
  };
  activity: {
    date: string;
    resource: string;
    status: string;
  };
}

const UserDashboardCards: React.FC<UserDashboardCardsProps> = ({ navUser, levelInfo, nextLevelInfo, activity }) => {
  return (
    <div className="space-y-6">
      <RankCard 
        navUser={navUser}
        levelInfo={levelInfo}
        nextLevelInfo={nextLevelInfo}
      />
      <ActivityCard activity={activity} />
    </div>
  );
};

export default UserDashboardCards;