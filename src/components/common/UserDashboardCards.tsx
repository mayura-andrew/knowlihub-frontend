import React from 'react';
import RankCard from './RankCard.component';
import StatusOfSubmissionCard from './StatusOfSubmission.component';
import ActivityCard from './RecentActivitiesCard.component';
import ProgressCard from './ProgressCard.component';
import StudyTipsCard from './StudyTips.component';

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
  studyTip: {
    text: string
    author: string
  }
}


const UserDashboardCards: React.FC<UserDashboardCardsProps> = ({ navUser, levelInfo, nextLevelInfo, activity, studyTip }) => {
  return (
    <div className="space-y-4">
      <RankCard 
        navUser={navUser}
        levelInfo={levelInfo}
        nextLevelInfo={nextLevelInfo}
      />
      <StudyTipsCard tip={studyTip} />
      <ProgressCard />
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