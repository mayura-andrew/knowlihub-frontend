import { Rocket, TrendingUp, Tag, Clock, Bell } from 'lucide-react';
import ResourceList from '../features/ResourceList';

const HomePage = () => {
  // This would normally come from your auth context/provider
  const isSignedIn= false // For demo purposes
  const user= ({ name: 'John' }); // Mock user data

  

  const SignedInContent = () => (
    <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
      {/* Welcome Hero Section */}
      <section className="bg-gradient-to-r from-[#D1C4E9] via-[#BBDEFB] to-[#E1BEE7] rounded-lg p-8 text-[#212529]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome back, {user.name}! 👋</h1>
            <p className="text-lg opacity-90">Ready to continue your learning journey?</p>
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

      {/* Recommended Resources */}
      <section className="bg-[#F8F9FA] rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[#212529] flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-[#007BFF]" />
            Recommended for You
          </h2>
          <button className="text-[#007BFF] hover:underline text-sm">
            View All
          </button>
        </div>
        <div className="grid gap-6">
          <ResourceList />
        </div>
      </section>

        {/* Latest  Learning Resource Section */}
    <section className="bg-[#E3F2FD] rounded-lg shadow-sm p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[#212529] flex items-center">
            <Clock className="w-5 h-5 mr-2 text-[#28A745]" />
            Latest Resources
          </h2>
          <button className="text-[#007BFF] hover:underline text-sm">
            View All
          </button>
        </div>
        <div className="grid gap-6">
          <ResourceList />
        </div>
      </section>

      {/* Popular Tags */}
      <section className="bg-[#F8F9FA] rounded-lg shadow-sm p-8">
        <h2 className="text-xl font-semibold text-[#212529] flex items-center mb-6">
          <Tag className="w-5 h-5 mr-2 text-[#17A2B8]" />
          Popular Tags
        </h2>
        <div className="flex flex-wrap gap-3">
          {['React', 'Python', 'JavaScript', 'Machine Learning', 'Web Development', 'Data Science', 'UI/UX'].map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 bg-[#F8F9FA] text-[#495057] rounded-full text-sm font-medium hover:bg-[#007BFF]/10 hover:text-[#007BFF] transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </section>
    </div>
  );

  const GuestContent = () => (
    <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#007BFF] to-[#6C757D] text-white rounded-lg p-8 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Discover the Best Resources to Accelerate Your Learning Journey!
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Access curated content, connect with learners, and build your skills in one place.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-[#007BFF] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" />
              Sign Up for Free
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#007BFF] transition-all">
              Explore Resources
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#E3F2FD] rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-8 text-[#212529] text-center">
          Why Join Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#007BFF]/10 flex items-center justify-center mb-4">
              <Rocket className="w-8 h-8 text-[#007BFF]" />
            </div>
            <h3 className="text-lg font-semibold text-[#212529] mb-2">
              Personalized Recommendations
            </h3>
            <p className="text-[#495057]">
              Get tailored content that matches your learning goals and interests.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#28A745]/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-[#28A745]" />
            </div>
            <h3 className="text-lg font-semibold text-[#212529] mb-2">
              High-Quality Resources
            </h3>
            <p className="text-[#495057]">
              Access carefully curated resources vetted by experts in the field.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#17A2B8]/10 flex items-center justify-center mb-4">
              <Tag className="w-8 h-8 text-[#17A2B8]" />
            </div>
            <h3 className="text-lg font-semibold text-[#212529] mb-2">
              Engage with Community
            </h3>
            <p className="text-[#495057]">
              Connect with like-minded learners and share knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Resources Preview */}
      <section className="bg-[#F8F9FA] rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#212529] flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-[#007BFF]" />
            Trending Resources
          </h2>
        </div>
        <div className="grid gap-6">
          <ResourceList />
        </div>
        <div className="mt-6 text-center">
          <button className="text-[#007BFF] font-medium hover:underline">
            Sign Up to Access All Resources →
          </button>
        </div>
      </section>

       {/* Testimonials Section */}
       <section className="bg-[#E3F2FD] rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-8 text-[#212529] text-center">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah L.",
              role: "Software Developer",
              quote: "This platform has completely transformed my learning journey!",
            },
            {
              name: "Michael R.",
              role: "Data Scientist",
              quote: "The curated resources saved me countless hours of searching.",
            },
            {
              name: "Emily K.",
              role: "UX Designer",
              quote: "The community here is incredibly supportive and knowledgeable.",
            },
          ].map((testimonial) => (
            <div key={testimonial.name} className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#007BFF]/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-[#007BFF]">
                  {testimonial.name[0]}
                </span>
              </div>
              <p className="text-[#495057] italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-[#212529]">{testimonial.name}</p>
              <p className="text-sm text-[#6C757D]">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#007BFF] to-[#6C757D] text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join Thousands of Learners Today!
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Start your learning journey now and get access to thousands of curated resources.
        </p>
        <button className="bg-white text-[#007BFF] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all inline-flex items-center">
          <Rocket className="w-5 h-5 mr-2" />
          Sign Up for Free
        </button>
      </section>
    </div>
  );

  return (
    <div className="p-6">
      {isSignedIn ? <SignedInContent /> : <GuestContent />}
    </div>
  );
};

export default HomePage;
