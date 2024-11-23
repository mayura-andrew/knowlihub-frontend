import { Rocket, TrendingUp, Clock, Tag } from 'lucide-react';
import ResourceList from '../features/ResourceList';

const HomePage = () => {
    return (
      <div className="grid grid-cols-1 gap-6 p-6">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-lg p-8 text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome back, John! 👋</h1>
          <p className="text-lg opacity-90">Ready to continue your learning journey?</p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-white text-[#007BFF] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center">
              <Rocket className="w-4 h-4 mr-2" />
              Continue Learning
            </button>
            <button className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all">
              Browse Resources
            </button>
          </div>
        </section>
  
        {/* Main Content Sections */}
        <div className="grid grid-cols-1 gap-6">
          {/* Recommended Resources */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#212529] flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-[#007BFF]" />
                Recommended for You
              </h2>
              <button className="text-[#007BFF] hover:underline text-sm">
                View All
              </button>
            </div>
            <div className="grid gap-4">
            <ResourceList />
            </div>
          </section>
  
          {/* Latest Resources */}
          <section>
            <div className="flex items-center justify-between mb-4">
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
  
          {/* Popular Tags */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#212529] flex items-center">
                <Tag className="w-5 h-5 mr-2 text-[#17A2B8]" />
                Popular Tags
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Python', 'JavaScript', 'Machine Learning', 'Web Development'].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 bg-[#F8F9FA] text-[#495057] rounded-full text-sm font-medium hover:bg-[#007BFF]/10 hover:text-[#007BFF] transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
};
  
export default HomePage;