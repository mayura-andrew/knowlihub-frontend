import { 
  BookmarkPlus, 
  Share2, 
  Trophy,
  Target,
  Globe,
  BookOpen,
  Brain,
  Settings2
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PlatformFeaturesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#F8F9FA] to-white py-4 rounded-lg">

            {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #007BFF 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}/>
      </div>
      {/* Browser Extension Highlight */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-2 rounded-full mb-6">
              <BookmarkPlus className="w-4 h-4" />
              <span className="text-sm font-semibold">Browser Extension</span>
            </div>
            <span className="px-2 py-1 text-xs font-thin text-black italic rounded-full bg-gray-200">
                Coming Soon
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6">
              Save Learning Resources<br />from Anywhere on the Web
            </h2>
            <p className="text-lg text-[#495057] mb-8">
              Transform any web content into your personal learning material. Our browser extension seamlessly integrates with your learning journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="px-4 py-2 bg-purple-100 text-purple-700 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Save from any website
              </Badge>
              <Badge className="px-4 py-2 bg-purple-100 text-purple-700 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share with community
              </Badge>
              <Badge className="px-4 py-2 bg-purple-100 text-purple-700 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Organize resources
              </Badge>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-4 left-4 w-full h-full bg-purple-100 rounded-2xl -z-10" />
            <Card className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-8">
                  <Badge className="bg-green-500">Extension Active</Badge>
                  <BookmarkPlus className="w-6 h-6 text-purple-600" />
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg group hover:bg-purple-50 transition-colors">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Globe className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4 group-hover:bg-purple-200 transition-colors" />
                        <div className="h-3 bg-gray-100 rounded w-1/2 mt-2 group-hover:bg-purple-100 transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Profile Features Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-full mb-6">
            <Settings2 className="w-4 h-4" />
            <span className="text-sm font-semibold">Platform Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6">
            Your Learning Journey, Personalized
          </h2>
          <p className="text-[#495057] max-w-2xl mx-auto">
            Track your progress, showcase achievements, and connect with fellow learners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Trophy,
              color: "purple",
              title: "Track Progress",
              description: "Monitor your learning streak and completed courses"
            },
            {
              icon: Target,
              color: "purple",
              title: "Set Goals",
              description: "Define and achieve your personal learning objectives"
            },
            {
              icon: Brain,
              color: "purple",
              title: "Smart Analytics",
              description: "Get insights into your learning patterns"
            },
            {
              icon: Share2,
              color: "purple",
              title: "Share & Connect",
              description: "Build your network and share resources"
            }
          ].map((feature, index) => (
            <div key={index} className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-${feature.color}-100 flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-lg font-semibold text-[#212529] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#495057]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeaturesSection;
