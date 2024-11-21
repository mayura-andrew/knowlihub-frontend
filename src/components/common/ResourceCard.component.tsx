import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '@/types/types';
import AuthorInfo from './AuthorInfo.component';
import Comment from './Comment.component';

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(resource.imageUrl);
  const [showComments, setShowComments] = useState<boolean>(false);

  useEffect(() => {
    const fetchImage = async () => {
      if (!resource.imageUrl) {
        try {
          const response = await fetch(`http://localhost:3001/api/fetchMetaData?url=${encodeURIComponent(resource.url)}`);
          const metadata = await response.json();
          setImageUrl(metadata.image);
        } catch (error) {
          console.error('Failed to fetch meta data', error);
        }
      }
    };

    fetchImage();
  }, [resource.url, resource.imageUrl]);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-blue-500">
      <div className="flex flex-col md:flex-row">
        {/* Image and Resource Details Section */}
        <div className="md:w-1/3 relative h-64">
          {imageUrl && (
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
              <img
                src={imageUrl}
                alt={resource.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="flex-1 p-6">
          {/* Author Info */}
          <div className="mb-4">
            <AuthorInfo
              avatar={resource.author.avatar}
              name={resource.author.name}
              level={resource.author.level}
              position={resource.author.position}
              profileLink={`/profile/${resource.author.id}`}
            />
          </div>

          <div className="space-y-4">
            {/* Title and Description */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 line-clamp-2">{resource.description}</p>
              <p className="text-sm text-gray-500">Shared on {new Date(resource.date).toLocaleDateString()}</p>
            </div>

            <Link to={`/resource/${resource.id}`} className="block text-blue-500 font-medium hover:underline mt-4">
              {/* Resource Link */}
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
              >
                Visit Resource →
              </a>
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats and Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-amber-500">
                  <span className="text-lg mr-1">⭐</span>
                  <span className="font-medium">{resource.rating}</span>
                </div>
                <div className="flex items-center text-blue-500 cursor-pointer" onClick={() => setShowComments(!showComments)}>
                  <span className="text-lg mr-1">💬</span>
                  <span className="font-medium">{resource.comments.length}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Saving resource ${resource.id}`);
                  }}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
                >
                  Save 📌
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Recommending resource ${resource.id}`);
                  }}
                  className="px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors font-medium text-sm"
                >
                  Recommend 👍
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className={`p-6 border-t border-gray-100 transition-all duration-300 ${showComments ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <h4 className="text-lg font-bold text-gray-900 mb-4">Community Insights 💡</h4>
        <div className="max-h-48 overflow-y-auto">
          {resource.comments.length > 0 ? (
            resource.comments.map((comment) => (
              <Comment
                key={comment.id}
                author={comment.author.name}
                text={comment.text}
                avatar={comment.author.avatar}
                date={comment.date}
              />
            ))
          ) : (
            <div className="text-center text-gray-500">
              No comments yet. Be the first to share your thoughts! 🤔💬
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;