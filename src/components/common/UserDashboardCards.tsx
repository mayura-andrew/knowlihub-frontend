import React from 'react';
import RankCard from './RankCard.component';
import StatusOfSubmissionCard from './StatusOfSubmission.component';
import ActivityCard from './RecentActivitiesCard.component';
import ProgressCard from './ProgressCard.component';
import StudyTipsCard from './StudyTips.component';
import AuthorInfo from './AuthorInfo.component'; // Import the AuthorInfo component
import { Link } from 'react-router-dom';

interface UserDashboardCardsProps {
  isLoggedIn: boolean;
  navUser?: {
    name: string;
    avatar: string;
    rank: number;
    level: number;
    points: number;
    nextLevelPoints: number;
  };
  levelInfo?: {
    title: string;
    color: string;
    emoji: string;
  };
  nextLevelInfo?: {
    title: string;
    emoji: string;
  };
  activity?: {
    date: string;
    resource: string;
    status: string;
  };
  studyTip?: {
    text: string;
    author: string;
  };
  featuredUsers?: {
    avatar: string;
    name: string;
    level: number;
    expertise: string;
  }[];
}

const UserDashboardCards: React.FC<UserDashboardCardsProps> = ({ isLoggedIn, navUser, levelInfo, nextLevelInfo, activity, studyTip, featuredUsers }) => {
  return (
    <div className="space-y-4">
      {isLoggedIn && (
        <>
          <RankCard 
            isLoggedIn={true}
            navUser={navUser}
            levelInfo={levelInfo}
            nextLevelInfo={nextLevelInfo}
          />
          {studyTip && <StudyTipsCard tip={studyTip} />}
          <ProgressCard isLoggedIn={true} />
          <StatusOfSubmissionCard activity={activity} isLoggedIn={true} />
          <ActivityCard
            activities={[
              { description: "Completed React Tutorial", time: "2 hours ago" },
              { description: "Saved Python Course", time: "5 hours ago" },
              { description: "Earned 'Quick Learner' badge", time: "1 day ago" },
            ]} isLoggedIn={true}
          />
        </>
      )}

      {/* Top Contributors Section */}
      <div className="border-t border-[#DEE2E6] my-6" />
      <div className="mb-6">
        <h3 className="text-md font-semibold text-[#212529] flex items-center justify-center mb-4">
          <span className="mr-2">👤</span> Top Contributors
        </h3>
        <ul className="space-y-2 max-h-72">
          {featuredUsers?.map((user, index) => (
            <AuthorInfo
              key={index}
              avatar={user.avatar}
              name={user.name}
              level={user.level}
              position={user.expertise}
              profileLink={`/profile/${user.name}`}
              size="small"
              showFollowButton={false}
            />
          ))}
        </ul>
      </div>
      <div className="mt-4 text-center">
        <Link to="/more-info" className="text-sm text-[#007BFF] hover:underline">
          See More Contributors
        </Link>
      </div>
    </div>
  );
};

export default UserDashboardCards;