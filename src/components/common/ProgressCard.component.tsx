import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface ProgressCardProps {
  isLoggedIn: boolean;
  weeklyGoal?: {
    completed: number;
    total: number;
  } | null;
  learningStreak?: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ isLoggedIn, weeklyGoal, learningStreak }) => {
  const progressPercentage = weeklyGoal ? (weeklyGoal.completed / weeklyGoal.total) * 100 : 0;

  return (
    <Card className="mb-4 bg-white rounded-lg shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <CheckCircle className="w-4 h-4 mr-2 text-[#28A745]" />
          Your Goals
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoggedIn ? (
          <div className="space-y-3">
            {weeklyGoal ? (
              <div className="bg-[#F8F9FA] p-2 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-[#495057]">Weekly Goal</span>
                  <span className="text-[#28A745]">{weeklyGoal.completed}/{weeklyGoal.total} completed</span>
                </div>
                <div className="w-full bg-[#DEE2E6] rounded-full h-2">
                  <div className="bg-[#28A745] h-2 rounded-full" style={{ width: `${progressPercentage}%` }} />
                </div>
              </div>
            ) : (
              <div className="bg-[#F8F9FA] p-4 rounded-lg text-center">
                <p className="text-[#495057] text-sm mb-2">You haven't set a weekly goal yet.</p>
                <Button className="bg-[#007BFF] text-white hover:bg-[#0056b3] rounded-full">Create Goal</Button>
              </div>
            )}
            {learningStreak !== undefined && (
              <div className="bg-[#F8F9FA] p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#28A745] mb-1">{learningStreak} Days</div>
                  <p className="text-[#495057] text-sm">Learning Streak</p>
                  <p className="text-xs text-[#6C757D] mt-1">Keep it up! You're doing great!</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-sm text-[#495057] mb-4">
              Set personal learning goals, track your progress, and maintain a consistent learning streak.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgressCard;