import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface ActivityCardProps {
  activity: {
    date: string;
    resource: string;
    status: string;
  };
}

const StatusOfSubmissionCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending approval':
        return 'text-[#FFC107]';
      case 'approved':
        return 'text-[#28A745]';
      case 'rejected':
        return 'text-[#DC3545]';
      default:
        return 'text-[#495057]';
    }
  };

  return (
    <Card className="mb-4 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <span className="text-base">⏱️</span>
          <Link to="/more-info" className="ml-2 text-sm hover:underline">
            Submission Status
          </Link>
        </CardTitle>
        <div className="text-xs px-2 py-0.5 rounded-full bg-[#F8F9FA] text-[#495057]">
          {activity.date}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between border border-[#DEE2E6] p-2 rounded-lg">
            <span className="text-lg">📚</span>
            <h4 className="text-sm font-medium text-[#212529]">{activity.resource}</h4>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-[#495057] text-xs">Status:</span>
              <span className={`font-medium text-xs ${getStatusColor(activity.status)}`}>
                {activity.status}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-[#17A2B8]">
              <span className="text-[#495057]">*Admin review needed</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusOfSubmissionCard;
