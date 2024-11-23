import React from 'react';
import RankCard from './RankCard.component';
import StatusOfSubmissionCard from './StatusOfSubmission.component';
import ActivityCard from './RecentActivitiesCard.component';

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
      <StatusOfSubmissionCard activity={activity} />
      <ActivityCard
      activities={[
        { description: "Completed React Tutorial", time: "2 hours ago" },
        { description: "Saved Python Course", time: "5 hours ago" },
        { description: "Earned 'Quick Learner' badge", time: "1 day ago" },
      ]}
    />
    </div>
  );
};

export default UserDashboardCards;