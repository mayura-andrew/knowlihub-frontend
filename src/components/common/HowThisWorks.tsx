import { useState } from 'react';
import { Search, Tags, MessageSquare, Trophy, ChevronRight } from 'lucide-react';

const ContributionSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: "Discover and Share",
      color: "#007BFF",
      description: "Found an amazing tutorial or free course? Share it with just a few clicks.",
    },
    {
      icon: Tags,
      title: "Tag and Categorize",
      color: "#28A745",
      description: "Add tags and a short description to make resources easily discoverable.",
    },
    {
      icon: MessageSquare,
      title: "Collaborate",
      color: "#17A2B8",
      description: "Rate and review shared resources or join discussions.",
    },
    {
      icon: Trophy,
      title: "Build Credibility",
      color: "#FFC107",
      description: "Earn recognition as a top contributor in the community.",
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #007BFF 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}/>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#007BFF] text-white px-6 py-2 rounded-full mb-4">
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm font-semibold">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-4">
            Your Journey to Sharing Knowledge
          </h2>
          <p className="font-['Open_Sans'] text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Follow these simple steps to contribute and benefit from our community of learners
          </p>
        </div>

        {/* Compact Steps Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative pl-12"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Number */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-md"
                    style={{ backgroundColor: step.color }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div 
                  className={`bg-white rounded-lg p-4 shadow transition-all duration-300 ${
                    activeStep === index ? 'scale-102 shadow-md' : 'scale-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}10` }}
                    >
                      <step.icon className="w-4 h-4" style={{ color: step.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#212529]">
                        {step.title}
                      </h3>
                      <p className="text-[#495057] text-sm mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionSteps;