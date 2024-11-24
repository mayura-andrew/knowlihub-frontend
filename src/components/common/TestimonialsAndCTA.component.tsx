import { Rocket, Quote, MessageSquare } from 'lucide-react';

const TestimonialsAndCTA = () => {
  return (
    <div className="space-y-8">
      {/* Testimonials Section */}
      <section className="relative bg-gradient-to-br from-[#E3F2FD] to-white rounded-lg shadow-lg overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#007BFF]/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#28A745]/5 rounded-full blur-3xl animate-float-delay" />
          
          {/* Dotted Pattern */}
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'radial-gradient(#007BFF 1px, transparent 1px)',
                 backgroundSize: '32px 32px',
                 opacity: 0.1
               }}
          />
        </div>
          
        <div className="relative px-4 py-24 -mt-20">
        {/* Section Header */}
        <div className="text-center mb-12 relative">
        <div className="inline-flex items-center justify-center space-x-2 bg-[#007BFF] text-white px-6 py-2 rounded-full mb-6">
          <MessageSquare className="w-4 h-4" />
          <span className="text-sm font-semibold">User Testimonials</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
        What Our Users Are Saying
        </h2>
        <p className="font-['Open_Sans'] text-[#495057] max-w-2xl mx-auto">
        Discover how our platform has transformed the learning journey of thousands of users.
        </p>
      </div>


          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Sarah L.",
                role: "Software Developer",
                quote: "This platform has completely transformed my learning journey!",
                avatar: "https://randomuser.me/api/portraits/women/1.jpg",
                color: "#007BFF"
              },
              {
                name: "Michael R.",
                role: "Data Scientist",
                quote: "The curated resources saved me countless hours of searching.",
                avatar: "https://randomuser.me/api/portraits/men/1.jpg",
                color: "#28A745"
              },
              {
                name: "Emily K.",
                role: "UX Designer",
                quote: "The community here is incredibly supportive and knowledgeable.",
                avatar: "https://randomuser.me/api/portraits/women/2.jpg",
                color: "#17A2B8"
              },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl" />
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/3 translate-x-1/3"
                  style={{ backgroundColor: `${testimonial.color}10` }}
                />

                {/* Content */}
                <div className="relative">
                  {/* Quote Icon */}
                  <div 
                    className="absolute -top-2 -left-2 w-8 h-8 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    <Quote className="w-4 h-4 text-white" />
                  </div>

                  {/* Avatar */}
                  <div className="w-20 h-20 mx-auto mb-6">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/20 to-[#28A745]/20 rounded-full animate-spin-slow" />
                      <div className="absolute inset-1 bg-white rounded-full">
                        <img 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <p className="font-['Open_Sans'] text-[#495057] italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-6 border-t border-gray-100">
                    <p className="font-['Roboto'] font-semibold text-[#212529]">
                      {testimonial.name}
                    </p>
                    <p className="font-['Open_Sans'] text-sm text-[#6C757D]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-r from-[#007BFF] to-[#6C757D] text-white rounded-lg overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          {/* Animated Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full animate-slide"
                style={{
                  top: `${20 * i}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-['Roboto'] text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Join Thousands of Learners Today!
            </h2>
            <p className="font-['Open_Sans'] text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Start your learning journey now and get access to thousands of curated resources.
            </p>
            <button className="group bg-white text-[#007BFF] px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all inline-flex items-center shadow-lg hover:shadow-xl">
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Sign Up for Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsAndCTA;

// Add these to your tailwind.config.js
/*
module.exports = {
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'slide': 'slide 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
}
*/