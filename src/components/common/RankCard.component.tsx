import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Trophy } from 'lucide-react';

interface RankCardProps {
  isLoggedIn: boolean;
  navUser?: {
    rank: number;
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
}

const RankCard: React.FC<RankCardProps> = ({ isLoggedIn, navUser, levelInfo, nextLevelInfo }) => {
  return (
    <Card className="mb-4 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <Trophy className="w-4 h-4 mr-2 text-[#FFC107]" />
          {isLoggedIn ? 'Your Progress' : 'Join Us to Track Your Progress'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoggedIn && navUser && levelInfo ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#495057]">Current Rank</span>
              <span className="font-semibold text-[#212529]">Level {navUser.rank}</span>
            </div>
            <div className="flex items-center justify-center bg-slate-300 rounded-md">
              <div className="flex items-center text-center">
                <span className="mr-1">{levelInfo.emoji}</span>
                <span className="font-semibold text-[#212529]">{levelInfo.title}</span>
              </div>
            </div>
            <div className="w-full bg-[#F8F9FA] rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-[#007BFF] to-[#28A745] duration-300 h-2 rounded-full transition-all"
                style={{ width: `${(navUser.points / navUser.nextLevelPoints) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6C757D]">{navUser.points} points</span>
              <span className="text-[#6C757D]">{navUser.nextLevelPoints} points needed</span>
            </div>
            {nextLevelInfo && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs bg-slate-100 rounded-md p-1">
                  <span className="text-[#495057]">Next Level</span>
                  <div className="flex items-center text-[#212529] font-medium">
                    <span className="mr-1">{nextLevelInfo.emoji}</span>
                    {nextLevelInfo.title}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
          <p className="text-sm text-[#495057] mb-4">
            Track your progress, earn points, and level up with our ranking system.
          </p>
        </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RankCard;