import { Rocket, Bell } from 'lucide-react';

interface WelcomeSectionProps {
    user: {
        name: string;
    };
}


const WelcomeSection: React.FC<WelcomeSectionProps> = ({ user }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#D1C4E9] via-[#BBDEFB] to-[#E1BEE7] rounded-lg overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delay" />
        
        {/* Dotted Pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(#7C4DFF 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.1
          }}
        />

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-full animate-slide"
              style={{
                top: `${30 * i}%`,
                animationDelay: `${i * 0.7}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative p-8">
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            {/* Welcome Text with Shimmer Effect */}
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              <h1 className="relative text-3xl md:text-4xl font-bold text-[#212529]">
                Welcome back, {user.name}! 👋
              </h1>
            </div>
            
            <p className="text-lg text-[#212529]/90 mb-8">
              Ready to continue your learning journey?
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-white text-[#7C4DFF] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all flex items-center">
                <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Continue Learning
              </button>
              <button className="relative overflow-hidden border-2 border-[#7C4DFF] text-[#7C4DFF] px-8 py-3 rounded-full font-medium hover:text-white transition-all">
                <span className="relative z-10">Browse Resources</span>
                <div className="absolute inset-0 bg-[#7C4DFF] transform -translate-x-full hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Notification Bell with Animation */}
          <div className="hidden md:block">
            <button className="relative p-3 rounded-full bg-white/30 hover:bg-white/40 transition-all group">
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
              <Bell className="w-6 h-6 text-[#212529] group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
