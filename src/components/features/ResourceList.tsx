import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Resource {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: number;
  comments: number;
  rating: number;
  tags: string[];
  category: string;
}

const ResourceList: React.FC = () => {
  const [resources] = useState<Resource[]>([
    {
      id: '1',
      title: 'Complete React Developer Course',
      description: 'Comprehensive React course from basics to advanced concepts',
      author: { 
        name: 'John Doe', 
        avatar: 'src/assets/web-developer.svg' 
      },
      likes: 245,
      comments: 34,
      rating: 4.7,
      tags: ['React', 'JavaScript', 'Web Development'],
      category: 'Web Development'
    },
    {
      id: '2',
      title: 'Machine Learning with Python',
      description: 'In-depth guide to machine learning algorithms and implementation',
      author: { 
        name: 'Jane Smith', 
        avatar: 'src/assets/web-developer.svg' 
      },
      likes: 189,
      comments: 22,
      rating: 4.5,
      tags: ['Python', 'Machine Learning', 'Data Science'],
      category: 'Data Science'
    },
    {
        id: '3',
        title: 'Machine Learning with Python',
        description: 'In-depth guide to machine learning algorithms and implementation',
        author: { 
          name: 'Jane Smith', 
          avatar: 'src/assets/web-developer.svg' 
        },
        likes: 189,
        comments: 22,
        rating: 4.5,
        tags: ['Python', 'Machine Learning', 'Data Science'],
        category: 'Data Science'
      },
    // Add more resources...
  ]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl p-6">
        <div className="grid grid-cols-1 gap-6">
          {resources.map((resource) => (
            <Link 
              to={`/resource/${resource.id}`} 
              key={resource.id} 
              className="block"
            >
              <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <img 
                    src={resource.author.avatar} 
                    alt={resource.author.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{resource.author.name}</h4>
                    <p className="text-xs text-gray-500">{resource.category}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">{resource.title}</h3>

                <p className="text-gray-600 mb-3 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex space-x-2 mb-3">
                  {resource.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-1">⭐</span>
                    <span>{resource.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">💬</span>
                    <span>{resource.comments}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceList;
