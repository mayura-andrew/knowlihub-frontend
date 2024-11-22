import React from "react";

interface ActivityCardProps {
    activity: {
        date: string;
        resource: string;
        status: string;
    };
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
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
    <div className="bg-white border border-[#DEE2E6] p-3 rounded-lg transition-all duration-200 hover:shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-base">⏱️</span>
          <h3 className="text-sm font-semibold text-[#212529]">Recent Activity</h3>
        </div>
        <div className="text-xs px-2 py-0.5 rounded-full bg-[#F8F9FA] text-[#495057]">
          {activity.date}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
        <div className="flex items-center justify-between border border-[#DEE2E6] p-2 rounded-lg">            
            <span className="text-lg">📚</span>
            <h4 className="text-sm font-medium text-[#212529]">{activity.resource}</h4>
          </div>
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
    </div>
  );
};

export default ActivityCard;
