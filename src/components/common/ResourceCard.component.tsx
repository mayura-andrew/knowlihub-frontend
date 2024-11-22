import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Resource } from '@/types/types';
import AuthorInfo from './AuthorInfo.component';
import Comment from './Comment.component';
import { Globe, Youtube, Bookmark, MessageCircle, ExternalLink, Heart } from 'lucide-react';

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
      return <Youtube className="text-[#DC3545]" size={20} />;
    }
    return <Globe className="text-[#007BFF]" size={20} />;
  };

  return (
    <div className="bg-white rounded-lg border border-[#DEE2E6] hover:shadow-lg transition-all duration-300 overflow-hidden font-['Roboto']">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <Link 
          to={`${resource.url}`} 
          className="md:w-1/3 relative h-72 md:h-auto overflow-hidden group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={resource.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#F8F9FA]">
                <Globe className="text-[#6C757D] w-16 h-16" />
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white font-medium py-3 px-4 flex items-center justify-center group-hover:bg-[#007BFF]/90 transition-colors">
              {getPlatformIcon(resource.url)}
              <span className="ml-2 flex items-center">
                Visit Resource
                <ExternalLink size={16} className="ml-1" />
              </span>
            </div>
          </div>
        </Link>

        {/* Content Section */}
        <div className="flex-1 p-6">
          {/* Author Info */}
          <div className="mb-4">
            <AuthorInfo
              avatar={resource.author.avatar}
              name={resource.author.name}
              level={resource.author.level}
              position={resource.author.position}
              profileLink={`/profile/${resource.author.id}`}
              showFollowButton={true}
            />
          </div>

          <div className="space-y-4 text-center">
            {/* Title */}
            <h3 className="text-lg font-semibold text-[#212529] leading-tight">
              {resource.title}
            </h3>

            {/* Description */}
            <p className="text-[#495057] text-sm line-clamp-2">
              {resource.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#007BFF]/10 text-[#007BFF] rounded-full text-xs font-medium 
                           hover:bg-[#007BFF]/20 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Shared Date */}
            <p className="text-xs text-[#6C757D] italic">
              Shared on {new Date(resource.date).toLocaleDateString()}
            </p>

            {/* Stats and Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[#DEE2E6]">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-[#FFC107]">
                  <span className="text-lg mr-1">⭐</span>
                  <span className="font-medium text-sm text-[#212529]">
                    {resource.rating}
                  </span>
                </div>
                <button 
                  onClick={() => setShowComments(!showComments)}
                  className="flex items-center space-x-1 text-[#495057] hover:text-[#007BFF] transition-colors"
                >
                  <MessageCircle size={18} />
                  <span className="font-medium text-sm">
                    {resource.comments.length}
                  </span>
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Saving resource ${resource.id}`);
                  }}
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-[#007BFF] 
                           bg-[#007BFF]/10 rounded-full hover:bg-[#007BFF]/20 transition-colors"
                >
                  <Bookmark size={16} />
                  <span>Save</span>
                </button>

                <button
                onClick={(e) => {
                    e.preventDefault();
                    console.log(`Recommending resource ${resource.id}`);
                }}
                className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-white 
                           bg-[#28A745] rounded-full hover:bg-[#28A745]/90 transition-colors"
            >
              <Heart size={16} />

              <span>Recommend</span>
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="p-6 border-t border-[#DEE2E6] bg-[#F8F9FA]">
<div className="flex justify-between items-center mb-4">
            <h4 className="text-[#212529] font-semibold flex items-center">
                Community Insights
                <span className="ml-2">💡</span>
            </h4>
        </div>
          <div className="max-h-64 overflow-y-auto space-y-4 custom-scrollbar">
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
              <div className="text-center py-8 text-[#6C757D]">
                No recommend comments yet. Be the first to share your thoughts! 🤔
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceCard;
