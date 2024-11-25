import { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight, 
  BookOpen, 
  Share2, 
  Shield,
  Code,
  Bug,
  MessageSquare,
  GitFork,
} from 'lucide-react';

interface FAQSectionProps {
  title: string;
  questions: { question: string, answer: string }[];
  iconColor: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, questions, iconColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-12 mb-6">
      {/* Section Number Indicator */}
      <div className="absolute left-0 top-4">
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-md"
          style={{ backgroundColor: iconColor }}
        >
          <HelpCircle className="w-4 h-4" />
        </div>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-[#212529]">{title}</h2>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      
      {isOpen && (
        <div className="mt-4 space-y-4">
          {questions.map((qa, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-semibold text-[#212529] mb-2">{qa.question}</h3>
              <p className="text-[#495057] text-sm">{qa.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

type ContributionTypeKey = 'code' | 'issues' | 'docs';


const ContributorGuide = () => {
  const [activeTab, setActiveTab] = useState<ContributionTypeKey>('code');
  
  const contributionTypes: Record<ContributionTypeKey, {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    steps: string[];
  }> = {
    code: {
      icon: Code,
      title: "Code Contributions",
      description: "Help improve the platform's functionality",
      steps: [
        "Fork the repository from GitHub",
        "Create a new branch for your feature",
        "Follow our coding standards",
        "Submit a pull request with detailed description"
      ]
    },
    issues: {
      icon: Bug,
      title: "Report Issues",
      description: "Help us identify and fix problems",
      steps: [
        "Check existing issues first",
        "Use our issue template",
        "Provide detailed reproduction steps",
        "Add relevant labels and screenshots"
      ]
    },
    docs: {
      icon: MessageSquare,
      title: "Documentation",
      description: "Improve our guides and documentation",
      steps: [
        "Find documentation in /docs folder",
        "Follow markdown guidelines",
        "Update or add new guides",
        "Submit changes via pull request"
      ]
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {Object.entries(contributionTypes).map(([key, type]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as ContributionTypeKey)}
            className={`p-4 rounded-lg transition-all duration-300 text-left ${
              activeTab === key 
                ? 'bg-[#007BFF] text-white shadow-md' 
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <type.icon className={`w-6 h-6 mb-2 ${
              activeTab === key ? 'text-white' : 'text-[#007BFF]'
            }`} />
            <h4 className="font-semibold mb-1">{type.title}</h4>
            <p className={`text-sm ${
              activeTab === key ? 'text-white/90' : 'text-[#495057]'
            }`}>
              {type.description}
            </p>
          </button>
        ))}
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-lg mb-4">
          How to {contributionTypes[activeTab].title}
        </h4>
        <div className="space-y-4">
          {contributionTypes[activeTab].steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#007BFF] text-white flex items-center justify-center text-sm">
                {index + 1}
              </div>
              <p className="text-[#495057]">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HelpCenter = () => {
  const quickHelpCards = [
    {
      title: "Getting Started",
      icon: BookOpen,
      color: "#007BFF",
      description: "Learn the basics of using Knowlihub"
    },
    {
      title: "Share Resources",
      icon: Share2,
      color: "#28A745",
      description: "How to contribute learning materials"
    },
    {
      title: "Community Guidelines",
      icon: Shield,
      color: "#17A2B8",
      description: "Our rules and best practices"
    }
  ];

  const faqSections = [
    {
      title: "General Information",
      color: "#007BFF",
      questions: [
        {
          question: "What is Knowlihub?",
          answer: "Knowlihub is a community-driven platform for sharing and discovering free educational resources. It's designed to foster collaborative learning and make quality education accessible to everyone."
        },
        {
          question: "Who can use this platform?",
          answer: "Knowlihub is open to students, professionals, educators, and anyone interested in learning and sharing knowledge. Our community welcomes learners from all backgrounds and expertise levels."
        }
      ]
    },
    {
      title: "Resource Sharing",
      color: "#28A745",
      questions: [
        {
          question: "What kinds of resources can I share?",
          answer: "You can share various types of educational content including videos, articles, courses, tutorials, and GitHub repositories. All shared resources must be free and educational in nature."
        },
        {
          question: "How do I share a resource?",
          answer: "Simply click the 'Share Resource' button, enter the resource details (title, description, tags), and submit. Make sure to add relevant tags to help others discover your contribution."
        }
      ]
    },
    {
      title: "Open Source Contribution",
      color: "#007BFF",
      questions: [
        {
          question: "How can I contribute to Knowlihub's development?",
          answer: "As an open-source project, we welcome contributions in many forms: code improvements, bug reports, documentation updates, UI/UX enhancements, and feature suggestions. Start by checking our GitHub repository and contribution guidelines."
        },
        {
          question: "What skills are needed to contribute?",
          answer: "We welcome contributors with various skills! Whether you're a developer (React, Node.js), designer, technical writer, or community organizer, there's a place for you. Even if you're just starting, you can help with documentation, testing, or bug reporting."
        },
        {
          question: "Is there a contribution guide?",
          answer: "Yes! Our contribution guide is available in our GitHub repository. It covers our code of conduct, development setup, coding standards, and pull request process. We also provide templates for bug reports and feature requests."
        },
        {
          question: "How do I get started with my first contribution?",
          answer: "Look for issues labeled 'good first issue' or 'beginner-friendly' in our GitHub repository. These are carefully selected to help newcomers make their first contribution. You can also join our community discussions to get guidance from experienced contributors."
        }
      ]
    },
    {
      title: "Development Setup",
      color: "#28A745",
      questions: [
        {
          question: "How do I set up the development environment?",
          answer: "Clone the repository, install dependencies using npm/yarn, and follow the setup instructions in our README. We use React for frontend and Node.js for backend. Make sure to also set up the required environment variables."
        },
        {
          question: "What's the tech stack?",
          answer: "We use React, TypeScript, Node.js, and MongoDB. For styling, we use Tailwind CSS. Our infrastructure is hosted on AWS, and we use GitHub Actions for CI/CD."
        }
      ]
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
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#007BFF] text-white px-6 py-2 rounded-full mb-4">
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm font-semibold">Help Center</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-4">
            How can we help you?
          </h2>
          <p className="font-['Open_Sans'] text-[#495057] max-w-2xl mx-auto text-lg">
            Find answers to frequently asked questions about using Knowlihub
          </p>
        </div>

        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickHelpCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${card.color}10` }}
              >
                <card.icon className="w-6 h-6" style={{ color: card.color }} />
              </div>
              <h3 className="font-semibold text-[#212529] mb-2">{card.title}</h3>
              <p className="text-[#495057] text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Sections */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
          
          {/* Sections */}
          <div className="space-y-6">
            {faqSections.map((section, index) => (
              <FAQSection 
                key={index} 
                {...section} 
                iconColor={section.color}
              />
            ))}
          </div>
        </div>

        {/* New Contributor Overview Section */}
        <div className="mb-12 text-center mt-8">
          <div className="inline-flex items-center justify-center space-x-2 bg-[#007BFF] text-white px-6 py-2 rounded-full mb-4">
            <GitFork className="w-4 h-4" />
            <span className="text-sm font-semibold">Open Source Project</span>
          </div>
          <h2 className="text-3xl font-bold text-[#212529] mb-4">
            Join Our Community of Contributors
          </h2>
          <p className="font-['Open_Sans'] text-[#495057] max-w-2xl mx-auto text-lg">
            Knowlihub is built by the community, for the community. Whether you code, write, design, or organize, there's a place for you in our open-source family.
          </p>

          {/* Contribution Stats */}
          {/* <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Users, label: "Contributors", value: "100+" },
              { icon: GitPullRequest, label: "Pull Requests", value: "500+" },
              { icon: MessageSquare, label: "Discussions", value: "1000+" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <stat.icon className="w-8 h-8 text-[#007BFF] mb-2 mx-auto" />
                <div className="text-2xl font-bold text-[#212529]">{stat.value}</div>
                <div className="text-[#495057]">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* Contribution Guide Component */}
          <ContributorGuide />
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
            style={{ backgroundColor: '#007BFF10' }}
          >
            <HelpCircle className="w-6 h-6 text-[#007BFF]" />
          </div>
          <h3 className="text-xl font-bold text-[#212529] mb-4">Still need help?</h3>
          <p className="text-[#495057] mb-6">Our support team is here to assist you</p>
          <button className="bg-[#007BFF] text-white px-6 py-3 rounded-lg hover:bg-[#0056b3] transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;