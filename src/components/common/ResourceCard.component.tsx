import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '@/types/types';
import AuthorInfo from './AuthorInfo.component';
import Comment from './Comment.component';
import { FaYoutube, FaGlobe } from 'react-icons/fa';

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

  const getPlatformIcon = (url: string) => {
    if (url.includes('youtube')) {
      return <FaYoutube className="text-red-500" />;
    }
    return <FaGlobe className="text-blue-500" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-xm hover:shadow-md transition-all duration-300 overflow-hidden border-2 border-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Image and Resource Details Section */}
        <Link to={`${resource.url}`} className="md:w-1/3 relative h-76">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={resource.title}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <FaGlobe className="text-gray-500 text-6xl" />
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white font-bold p-2 flex items-center justify-center hover:underline">
              {getPlatformIcon(resource.url)}
              <span className="ml-2">Visit Resource →</span>
            </div>
          </div>
        </Link>
        <div className="flex-1 p-4">
          {/* Author Info */}
          <div className="mb-3">
            <AuthorInfo
              avatar={resource.author.avatar}
              name={resource.author.name}
              level={resource.author.level}
              position={resource.author.position}
              profileLink={`/profile/${resource.author.id}`}
            />
          </div>

          <div className="space-y-3">
            {/* Title */}
            <div>
              <h3 className="text-md font-bold text-gray-900 mb-1">{resource.title}</h3>
            </div>

            {/* Description */}
            <div className="h-12 overflow-hidden">
              <p className="text-sm text-gray-600 line-clamp-2">{resource.description}</p>
            </div>

            {/* Shared Date */}
            <div>
              <p className="text-xs text-gray-500 text-right italic">Shared on {new Date(resource.date).toLocaleDateString()}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats and Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="flex items-center text-amber-500">
                  <span className="text-base mr-1">⭐</span>
                  <span className="font-medium text-sm">{resource.rating}</span>
                </div>
                <div className="flex items-center text-blue-500 cursor-pointer" onClick={() => setShowComments(!showComments)}>
                  <span className="text-base mr-1">💬</span>
                  <span className="font-medium text-sm">{resource.comments.length}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Saving resource ${resource.id}`);
                  }}
                  className="px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium text-xs"
                >
                  Save 📌
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Recommending resource ${resource.id}`);
                  }}
                  className="px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors font-medium text-xs"
                >
                  Recommend 👍
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="p-4 border-t border-gray-100 transition-all duration-300">
          <h4 className="text-base font-bold text-gray-900 mb-2">Community Insights 💡</h4>
          <div className="max-h-48 overflow-y-auto">
            {resource.comments.length > 0 ? (
              resource.comments.map((comment) => (
                <Comment
                  key={comment.id}
                  author={comment.author.name}
                  position={comment.author.position}
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
      )}
    </div>
  );
};

export default ResourceCard;