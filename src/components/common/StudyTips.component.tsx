import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Quote } from 'lucide-react';

interface StudyTipsCardProps {
  tip: {
    text: string;
    author: string;
  };
}

const StudyTipsCard: React.FC<StudyTipsCardProps> = ({ tip }) => {
  return (
    <Card className="mb-4 bg-white rounded-lg shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
        <Quote className="w-4 h-4 mr-2 text-[#FFC107]" />
          Daily Inspirational Quote
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="bg-[#F8F9FA] p-4 rounded-lg">
            <p className="text-[#495057] text-sm italic">"{tip.text}"</p>
            <p className="text-[#212529] text-sm font-medium mt-2">- {tip.author}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyTipsCard;
