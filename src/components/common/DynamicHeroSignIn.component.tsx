import { useState, useEffect } from 'react';
import { Rocket, Bell } from 'lucide-react';

interface DynamicHeroSectionProps {
    userName: string;
}
const DynamicHeroSectionLoggedIn: React.FC<DynamicHeroSectionProps> = ({ userName }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  
  const welcomeMessages = [
    {
      greeting: `Welcome back, ${userName}! 👋`,
      subtext: "Ready to continue your learning journey?"
    },
    {
      greeting: `Great to see you, ${userName}! 🌟`,
      subtext: "What would you like to learn today?"
    },
    {
      greeting: `Hello ${userName}! 🎯`,
      subtext: "Your next achievement awaits!"
    },
    {
      greeting: `Welcome aboard, ${userName}! 🚀`,
      subtext: "Let's make progress together!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((current) => 
        current === welcomeMessages.length - 1 ? 0 : current + 1
      );
    }, 5000); // Changes message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#D1C4E9] via-[#BBDEFB] to-[#E1BEE7] rounded-lg p-8 text-[#212529]">
      <div className="flex items-center justify-between">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-4">
            {welcomeMessages[messageIndex].greeting}
          </h1>
          <p className="text-lg opacity-90">
            {welcomeMessages[messageIndex].subtext}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-white text-[#007BFF] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center">
              <Rocket className="w-4 h-4 mr-2" />
              Continue Learning
            </button>
            <button className="border border-[#007BFF] text-[#007BFF] px-6 py-2 rounded-full font-medium hover:bg-[#007BFF] hover:text-white transition-all">
              Browse Resources
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-start gap-4">
          <button className="p-2 rounded-full bg-white/50 hover:bg-white transition-all">
            <Bell className="w-6 h-6 text-[#212529]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DynamicHeroSectionLoggedIn;
