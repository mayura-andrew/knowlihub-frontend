import { BookOpen, Share2, Users, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden" id="benefits">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #007BFF 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}/>
      </div>

      <div className="relative px-4 py-24">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#007BFF] text-white px-6 py-2 rounded-full mb-6">
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-semibold">Resource Sharing Benefits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6">
            Discover the Best Resources to Accelerate Your Learning Journey!
          </h2>
          <p className="font-['Open_Sans'] text-[#495057] max-w-2xl mx-auto text-lg">
            Join our community of learners and contributors to create a powerful ecosystem of shared knowledge
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* For Contributors */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#007BFF]/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-[#007BFF]/10 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-[#007BFF] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold text-[#212529] mb-4">
                For Contributors
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#007BFF]/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#007BFF]" />
                  </div>
                  <p className="text-[#495057]">Build your personal brand within the learning community</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#007BFF]/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#007BFF]" />
                  </div>
                  <p className="text-[#495057]">Get engagement and feedback on shared resources</p>
                </li>
              </ul>
            </div>
          </div>

          {/* For Learners */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#28A745]/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-[#28A745]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#28A745] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold text-[#212529] mb-4">
                For Curious Learners
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#28A745]/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#28A745]" />
                  </div>
                  <p className="text-[#495057]">Access a curated library of free, high-quality resources</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#28A745]/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#28A745]" />
                  </div>
                  <p className="text-[#495057]">Discover resources that others have found useful and insightful</p>
                </li>
              </ul>
            </div>
          </div>

          {/* For Community */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#17A2B8]/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-[#17A2B8]/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#17A2B8] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold text-[#212529] mb-4">
                For Community
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#17A2B8]/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#17A2B8]" />
                  </div>
                  <p className="text-[#495057]">Foster a culture of collaboration and shared growth</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#17A2B8]/10 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#17A2B8]" />
                  </div>
                  <p className="text-[#495057]">Expand the library of free resources collectively</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
