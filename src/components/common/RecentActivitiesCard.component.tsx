import { Activity } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface RecentActivityCardProps {
    activities: {
        description: string;
        time: string;
    }[];
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({ activities }) => (
    <Card className="mb-4 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <Activity className="w-4 h-4 mr-2 text-[#28A745]" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-1 h-1 mt-2 rounded-full bg-[#DEE2E6]" />
              <div className="flex-1">
                <p className="text-sm text-[#212529]">{activity.description}</p>
                <span className="text-xs text-[#6C757D]">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
);

export default RecentActivityCard;
