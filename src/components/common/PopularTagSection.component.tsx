import { Tag, Hash, TrendingUp } from 'lucide-react';

const PopularTags = () => {
  const tags = [
    { name: 'React', count: 2.5, trending: true },
    { name: 'Python', count: 3.2, trending: true },
    { name: 'JavaScript', count: 2.8, trending: false },
    { name: 'Machine Learning', count: 1.9, trending: true },
    { name: 'Web Development', count: 2.1, trending: false },
    { name: 'Data Science', count: 2.4, trending: true },
    { name: 'UI/UX', count: 1.7, trending: false }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#E3F2FD] to-white rounded-lg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(#17A2B8 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.05
          }}
        />

        {/* Animated Background Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#17A2B8]/5 rounded-full blur-2xl animate-float" />
        <div className="absolute -bottom-32 -left-16 w-64 h-64 bg-[#007BFF]/5 rounded-full blur-2xl animate-float-delay" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        {/* Header with Animation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#17A2B8]/20 rounded-full animate-ping" />
              <div className="relative bg-[#17A2B8]/10 p-2 rounded-full">
                <Tag className="w-5 h-5 text-[#17A2B8]" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-[#212529] ml-3">
              Popular Tags
            </h2>
          </div>
          
          {/* Toggle View Option (could be functional) */}
          <button className="text-sm text-[#6C757D] hover:text-[#17A2B8] transition-colors flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">View Trending</span>
          </button>
        </div>

        {/* Tags Grid */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <button
              key={tag.name}
              className="group relative px-4 py-2 bg-white hover:bg-[#17A2B8] rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Background Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer rounded-full" />
              
              {/* Tag Content */}
              <div className="relative flex items-center">
                <Hash className="w-3.5 h-3.5 mr-1 text-[#17A2B8] group-hover:text-white transition-colors" />
                <span className="text-[#495057] group-hover:text-white transition-colors">
                  {tag.name}
                </span>
                
                {/* Post Count Badge */}
                <span className="ml-2 px-1.5 py-0.5 text-xs bg-[#17A2B8]/10 group-hover:bg-white/20 text-[#17A2B8] group-hover:text-white rounded-full transition-colors">
                  {tag.count}k
                </span>
                
                {/* Trending Indicator */}
                {tag.trending && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#DC3545] rounded-full">
                    <div className="absolute inset-0 bg-[#DC3545] rounded-full animate-ping" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTags;
