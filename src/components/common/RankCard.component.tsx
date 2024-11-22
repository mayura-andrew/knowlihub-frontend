import React from 'react';

interface RankCardProps {
  navUser: {
    rank: number;
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
}

const RankCard: React.FC<RankCardProps> = ({ navUser, levelInfo, nextLevelInfo }) => {
  return (
    <div className="bg-white border border-[#DEE2E6] p-3 rounded-lg transition-all duration-200 hover:shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-[#212529] flex items-center">
          <span className="mr-2 text-md">🏆</span>
          Your Rank
        </h3>
        <div className="relative group">
          <div className="bg-gradient-to-r from-[#007BFF] to-[#28A745] rounded-full px-2 py-0.5 
                        shadow-sm hover:shadow-md transition-all duration-200">
            <span className="text-white font-medium text-xs">
              #{navUser.rank}
            </span>
          </div>
        </div>
      </div>

      {/* Level Info */}
      <div className="flex flex-col items-center space-y-2">
        <div className={`
          px-2 py-0.5 rounded-full ${levelInfo?.color} 
          shadow-sm hover:shadow-md transition-all duration-200
          flex items-center justify-center space-x-1
        `}>
          <span className="text-sm">{levelInfo?.emoji}</span>
          <span className="font-medium text-xs">{levelInfo?.title}</span>
        </div>

        {nextLevelInfo && (
          <div className="w-full space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#495057]">Next Level</span>
              <div className="flex items-center text-[#212529] font-medium">
                <span className="mr-1">{nextLevelInfo.emoji}</span>
                {nextLevelInfo.title}
              </div>
            </div>

            <div className="relative pt-1">
              <div className="flex justify-between items-center text-xs text-[#495057] mb-1">
                <span>Progress</span>
                <span>{Math.round((navUser.points / navUser.nextLevelPoints) * 100)}%</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded-full bg-[#F8F9FA]">
                <div
                  style={{
                    width: `${(navUser.points / navUser.nextLevelPoints) * 100}%`
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap 
                            text-white justify-center bg-gradient-to-r from-[#007BFF] to-[#28A745]
                            transition-all duration-300"
                />
              </div>
              <div className="mt-1 text-xs text-[#495057] text-right">
                <span className="font-medium text-[#212529]">
                  {navUser.nextLevelPoints - navUser.points}
                </span> points needed
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RankCard;