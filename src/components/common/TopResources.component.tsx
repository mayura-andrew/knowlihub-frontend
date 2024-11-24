import React from 'react';
import { Brain, Calculator, Terminal, Shield, Atom, Database, BookOpen } from 'lucide-react';

const ResourceCards: React.FC = () => {
  const resources = [
    {
      title: "Machine Learning",
      description: "Deep Learning, Neural Networks, Computer Vision, and Natural Language Processing",
      icon: Brain,
      color: "#007BFF",
      courses: 245,
      bgPattern: "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwN0JGRiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]",
      extraClasses: "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50 before:to-indigo-50 before:opacity-90"
    },
    {
      title: "Mathematics",
      description: "Linear Algebra, Calculus, Statistics, and Probability Theory",
      icon: Calculator,
      color: "#28A745",
      courses: 189,
      bgPattern: "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMwIDMwbDMwIDMwTTMwIDMwTDAgNjBNMzAgMzBMMzAgME0zMCAzMEwwIDAiIHN0cm9rZT0iIzI4QTc0NSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]",
      extraClasses: "before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-50 before:to-emerald-50 before:opacity-90"
    },
    {
      title: "Computer Science",
      description: "Algorithms, Data Structures, Operating Systems, and Software Engineering",
      icon: Terminal,
      color: "#17A2B8",
      courses: 312,
      bgPattern: "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iIzE3QTJCOCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]",
      extraClasses: "before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-50 before:to-sky-50 before:opacity-90"
    },
    {
      title: "Cyber Security",
      description: "Network Security, Cryptography, Ethical Hacking, and Security Analysis",
      icon: Shield,
      color: "#DC3545",
      courses: 156,
      bgPattern: "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDIwaDIwdjIwSDIwek0wIDBoMjB2MjBIMHoiIGZpbGw9IiNEQzM1NDUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]",
      extraClasses: "before:absolute before:inset-0 before:bg-gradient-to-br before:from-red-50 before:to-rose-50 before:opacity-90"
    },
    {
      title: "Physics",
      description: "Quantum Mechanics, Relativity, Thermodynamics, and Classical Mechanics",
      icon: Atom,
      color: "#FFC107",
      courses: 178,
      bgPattern: "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGQzEwNyIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]",
      extraClasses: "before:absolute before:inset-0 before:bg-gradient-to-br before:from-yellow-50 before:to-amber-50 before:opacity-90"
    },
    {
      title: "Data Science",
      description: "Data Analysis, Big Data, Data Visualization, and Statistical Computing",
      icon: Database,
      color: "#6C757D",
      courses: 234,
      bgPattern: "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgc3Ryb2tlPSIjNkM3NTdEIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBmaWxsPSJub25lIiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz48L3N2Zz4=')]",
      extraClasses: "before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-50 before:to-slate-50 before:opacity-90"
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-lg">
      {/* Section Header */}
      <div className="text-center mb-12 relative">
        <div className="inline-flex items-center justify-center space-x-2 bg-[#007BFF] text-white px-6 py-2 rounded-full mb-6">
          <BookOpen className="w-4 h-4" />
          <span className="text-sm font-semibold">Learning Resources</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
          Explore Our Fields of Study
        </h2>
        <p className="font-['Open_Sans'] text-[#495057] max-w-2xl mx-auto">
          Dive into comprehensive learning paths crafted by experts and join thousands of learners mastering these fields.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {resources.map((resource, index) => (
          <div
            key={index}
            className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${resource.bgPattern} bg-opacity-5 ${resource.extraClasses}`}
          >
            {/* Animated Gradient Border */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"
              style={{ '--tw-gradient-via-opacity': '0.05' } as React.CSSProperties}
            />

            {/* Content */}
            <div className="relative">
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 backdrop-blur-sm"
                style={{ backgroundColor: `${resource.color}15` }}
              >
                <resource.icon 
                  className="w-7 h-7 transition-colors duration-300"
                  style={{ color: resource.color }}
                />
              </div>

              {/* Text Content */}
              <h3 className="font-['Roboto'] text-xl font-bold text-[#212529] mb-3">
                {resource.title}
              </h3>
              <p className="font-['Open_Sans'] text-[#495057] mb-6">
                {resource.description}
              </p>

              {/* Stats */}
              <div className="flex items-center space-x-6 pt-6 border-t border-gray-100">
                <div>
                  <p className="font-['Roboto'] font-bold text-[#212529]">{resource.courses}</p>
                  <p className="font-['Open_Sans'] text-sm text-[#6C757D]">Courses</p>
                </div>

                <button 
                  className="ml-auto flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300"
                  style={{ color: resource.color }}
                >
                  <span>Explore</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceCards;