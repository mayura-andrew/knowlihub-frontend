import React from 'react';
import { Clock } from 'lucide-react';
import ResourceList from '../features/ResourceList';

const LatestResourcesSection: React.FC = () => {
  return (
    <section className="bg-[#F8F9FA] rounded-lg shadow-sm p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#212529] flex items-center">
          <Clock className="w-5 h-5 mr-2 text-[#28A745]" />
          Latest Resources
        </h2>
        <button className="text-[#007BFF] hover:underline text-sm">
          View All
        </button>
      </div>
      <div className="grid gap-4">
        <ResourceList />
      </div>
    </section>
  );
};

export default LatestResourcesSection;
