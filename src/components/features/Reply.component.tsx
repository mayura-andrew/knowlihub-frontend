import React from 'react';
import { CommentProps } from '@/types/types';

const Reply: React.FC<CommentProps> = ({ author, text, avatar, date, replies }) => (
  <div className="relative flex items-start space-x-3 mb-2 p-4 border rounded-lg ml-8 bg-white border-gray-300">
    <img 
      src={avatar} 
      alt={author} 
      className="w-8 h-8 rounded-full"
    />
    <div className="flex-1 text-left">
      <h4 className="font-semibold mb-1 text-gray-800 text-md">
        {author}
      </h4>
      <p className="mb-2 text-gray-700 text-sm">
        {text}
      </p>
      <p className="text-xs text-gray-500">
        {date}
      </p>
      {replies && replies.length > 0 && (
        <div className="mt-4">
          {replies.map((reply, index) => (
            <Reply key={index} {...reply} />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Reply;