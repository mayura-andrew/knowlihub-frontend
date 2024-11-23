import { Rocket, TrendingUp, Users } from 'lucide-react';
import HeroImage from '@/assets/hero.webp';


const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-lg">
      {/* Hero Image Container */}
      <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
        
        <img 
          src={HeroImage} 
          alt="Learning Platform Features" 
          className="w-full h-full object-cover"
        />
        {/* Overlay with wave shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            className="w-full h-24 fill-white"
            preserveAspectRatio="none"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0V64Z" />
          </svg>
        </div>
      </div>

      {/* Features Content */}
      <div className="relative px-4 -mt-20">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-[#007BFF] text-white px-6 py-2 rounded-full mb-6 text-sm font-semibold">
            Platform Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
            Why Join Our Platform?
          </h2>
          <p className="text-[#495057] text-lg">
            Discover how our platform can transform your learning journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Feature 1 */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#007BFF]/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-[#007BFF]/10 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-[#007BFF] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#212529] mb-4">
                Personalized Recommendations
              </h3>
              <p className="text-[#495057]">
                Our AI-powered system analyzes your interests and learning style to provide tailored content recommendations that match your goals.
              </p>
              <div className="mt-6 flex items-center text-[#007BFF] font-medium">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#28A745]/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-[#28A745]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#28A745] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#212529] mb-4">
                High-Quality Resources
              </h3>
              <p className="text-[#495057]">
                Access a curated collection of expert-verified resources, ensuring you learn from the most reliable and up-to-date materials.
              </p>
              <div className="mt-6 flex items-center text-[#28A745] font-medium">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#17A2B8]/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-[#17A2B8]/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#17A2B8] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#212529] mb-4">
                Engage with Community
              </h3>
              <p className="text-[#495057]">
                Join a vibrant community of learners, participate in discussions, and collaborate on projects to enhance your learning experience.
              </p>
              <div className="mt-6 flex items-center text-[#17A2B8] font-medium">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
