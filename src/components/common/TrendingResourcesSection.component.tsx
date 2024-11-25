import React from 'react';
import { TrendingUp } from 'lucide-react';
import ResourceList from '../features/ResourceList';

const TrendingResourcesSection: React.FC = () => {
  return (
    <section className="bg-[#F8F9FA] rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#212529] flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-[#007BFF]" />
          Trending Learning Resources
        </h2>
      </div>
      <div className="grid gap-4">
        <ResourceList />
      </div>
      <div className="mt-6 text-center">
        <button className="text-[#007BFF] font-medium hover:underline">
          Sign Up to Access All Resources →
        </button>
      </div>
    </section>
  );
};

export default TrendingResourcesSection;
