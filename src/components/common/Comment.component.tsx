import { CommentProps } from '@/types/types';
import React, { useState } from 'react';
import Reply from '../features/Reply.component';

const Comment: React.FC<CommentProps> = ({ author, text, avatar, date, replies, position }) => {
  const [votes, setVotes] = useState<number>(0);
  const [showReplyForm, setShowReplyForm] = useState<boolean>(false);
  const [replyText, setReplyText] = useState<string>('');
  const [commentReplies, setCommentReplies] = useState<CommentProps[]>(replies || []);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  const handleReply = () => {
    if (replyText.trim()) {
      const newReply: CommentProps = {
        author: author, // Replace with actual current user data
        text: replyText,
        position: position,
        avatar: avatar, // Replace with actual current user avatar
        date: new Date().toISOString(),
        replies: [],
      };
      setCommentReplies([...commentReplies, newReply]);
      setReplyText('');
      setShowReplyForm(false);
    }
  };

  return (
    <div className="relative flex items-start space-x-4 mb-6 p-4 border rounded-lg shadow-sm bg-white">
      <img src={avatar} alt={author} className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className='text-left'>
            <h4 className="font-semibold text-gray-900">{author}</h4>
            <p className="text-gray-500 text-sm">{position}</p>
            <p className="text-gray-500 text-sm">{date}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={handleUpvote} className="text-gray-500 hover:text-gray-700">
              ⬆️
            </button>
            <span className="font-medium text-gray-700">{votes}</span>
            <button onClick={handleDownvote} className="text-gray-500 hover:text-gray-700">
              ⬇️
            </button>
          </div>
        </div>
        <p className="text-gray-700 mt-2">{text}</p>
        <div className="flex items-center space-x-2 mt-3">
          <button onClick={() => setShowReplyForm(!showReplyForm)} className="text-blue-500 hover:underline text-sm">
            Reply
          </button>
        </div>
        {showReplyForm && (
          <div className="mt-3">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write a reply..."
            />
            <button onClick={handleReply} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm">
              Post Reply
            </button>
          </div>
        )}
        {commentReplies.length > 0 && (
          <div className="mt-4 space-y-4">
            {commentReplies.map((reply, index) => (
              <Reply key={index} {...reply} />
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Comment;