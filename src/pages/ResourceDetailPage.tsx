import React, { useState } from 'react';
import { 
  Star, 
  MessageCircle, 
  ThumbsUp, 
  Share2, 
  User, 
  ExternalLink 
} from 'lucide-react';
import GlobalLayout from '../components/layout/GlobalLayout';

// Types for Resource and User
interface User {
  id: string;
  name: string;
  avatar: string;
  expertise: string;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  author: User;
  likes: number;
  comments: number;
  rating: number;
  tags: string[];
  category: string;
}

const ResourceDetailPage: React.FC = () => {
  // Mock resource data (replace with actual data fetching)
  const [resource] = useState<Resource>({
    id: '1',
    title: 'Complete React Developer Course',
    description: 'Comprehensive React course covering fundamentals to advanced concepts with hands-on projects',
    url: 'https://example.com/react-course',
    author: {
      id: '1',
      name: 'John Doe',
      avatar: '/api/placeholder/50/50',
      expertise: 'Web Development'
    },
    likes: 245,
    comments: 34,
    rating: 4.7,
    tags: ['React', 'JavaScript', 'Web Development'],
    category: 'Web Development'
  });

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <GlobalLayout hideLeftSidebar hideRightSidebar>
      <div className="max-w-4xl mx-auto p-6">
        {/* Resource Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {resource.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <Star className="text-yellow-500 mr-1" size={20} />
                <span>{resource.rating} / 5</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="mr-1" size={20} />
                <span>{resource.comments} Comments</span>
              </div>
              <span className="text-sm">
                Category: {resource.category}
              </span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button 
              onClick={handleLike}
              className={`
                flex items-center px-4 py-2 rounded-md
                ${liked 
                  ? 'bg-blue-500 text-white' 
                  : 'border border-blue-500 text-blue-500'
                }
              `}
            >
              <ThumbsUp className="mr-2" size={20} />
              {liked ? 'Liked' : 'Like'}
            </button>
            <button className="border border-gray-300 p-2 rounded-md">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Author Section */}
        <div className="flex items-center bg-gray-50 p-4 rounded-lg mb-6">
          <img 
            src={resource.author.avatar} 
            alt={resource.author.name} 
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-gray-800">
              {resource.author.name}
            </h3>
            <p className="text-gray-600">{resource.author.expertise}</p>
          </div>
        </div>

        {/* Resource Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Description</h2>
          <p className="text-gray-700 leading-relaxed">
            {resource.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Tags</h3>
          <div className="flex space-x-2">
            {resource.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* External Resource Link */}
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
        >
          <ExternalLink className="mr-2" size={20} />
          Access Resource
        </a>

        {/* Comments Section (Placeholder) */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Comments</h3>
          {/* TODO: Implement comment system */}
          <p className="text-gray-600">
            Comments functionality coming soon...
          </p>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default ResourceDetailPage;
