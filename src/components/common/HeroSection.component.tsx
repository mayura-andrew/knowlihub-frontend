import React from 'react';
import { Rocket } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#007BFF] to-[#6C757D] text-white rounded-lg overflow-hidden">
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      
      <div className="relative z-10 p-8 flex flex-col items-center text-center">
        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Share Knowledge, Grow Together
          </h1>
          <p className="font-['Open_Sans'] text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Unlock the power of community learning! Share your favorite free resources with others and help create a collaborative ecosystem of knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#007BFF] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" />
              Sign Up for Free
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#007BFF] transition-all">
              Explore Resources
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-sm rounded-lg p-4 animate-float-delay hidden md:block">
          <div className="w-6 h-6 bg-white/90 rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF]/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
