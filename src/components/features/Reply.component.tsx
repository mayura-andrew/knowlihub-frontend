import React from 'react';
import { CommentProps } from '@/types/types';

const Reply: React.FC<CommentProps> = ({ author, text, avatar, date, replies }) => (
  <div className="relative flex items-start space-x-3 mb-2 p-2 border rounded-lg shadow-sm ml-8">
    <img src={avatar} alt={author} className="w-8 h-8 rounded-full" />
    <div className="flex-1 text-left">
      <h4 className="font-semibold text-gray-800">{author}</h4>
      <p className="text-gray-600">{text}</p>
      <p className="text-xs text-gray-400">{date}</p>
      {replies && replies.length > 0 && (
        <div className="mt-2">
          {replies.map((reply, index) => (
            <Reply key={index} {...reply} />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Reply;