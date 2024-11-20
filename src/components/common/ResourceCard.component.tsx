import React from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '@/types/types';
import AuthorInfo from './AuthorInfo.component';

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <Link to={`/resources/${resource.id}`} className="block">
      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        {/* Use AuthorInfo Component */}
        <AuthorInfo
          avatar={resource.author.avatar}
          name={resource.author.name}
          level={resource.author.level}
          position={resource.author.position}
          profileLink={`/profile/${resource.author.id}`} // Adjust profile link logic
        />

        {/* Divider Line */}
        <hr className="my-4 border-gray-200" />

        <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
        <p className="text-gray-600 mb-3 line-clamp-3">
          {resource.description}
        </p>

        {/* Resource URL */}
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mb-3 block"
        >
          Visit Resource
        </a>

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
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="mr-1">⭐</span>
              <span>{resource.rating}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">💬</span>
              <span>{resource.comments}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">📌</span>
              <span>{resource.saves || 0}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent link navigation
                // TODO: Implement save functionality
                console.log(`Saving resource ${resource.id}`);
              }}
              className="text-blue-500 hover:text-blue-700"
            >
              Save 🔖
            </button>
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent link navigation
                // TODO: Implement recommend functionality
                console.log(`Recommending resource ${resource.id}`);
              }}
              className="text-green-500 hover:text-green-700"
            >
              Add Recommend 👍
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;