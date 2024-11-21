import { CommentProps } from '@/types/types';
import React, { useState } from 'react';
import Reply from '../features/Reply.component';

const Comment: React.FC<CommentProps> = ({ author, text, avatar, date, replies }) => {
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
        author: 'Current User', // Replace with actual current user data
        text: replyText,
        avatar: 'path/to/avatar', // Replace with actual current user avatar
        date: new Date().toISOString(),
        replies: [],
      };
      setCommentReplies([...commentReplies, newReply]);
      setReplyText('');
      setShowReplyForm(false);
    }
  };

  return (
    <div className="relative flex items-start space-x-3 mb-4 p-4 border rounded-lg shadow-sm">
      <img src={avatar} alt={author} className="w-10 h-10 rounded-full" />
      <div className="flex-1 text-left">
        <h4 className="font-semibold text-gray-800">{author}</h4>
        <p className="text-gray-600">{text}</p>
        <p className="text-xs text-gray-400">{date}</p>
        <div className="flex items-center space-x-2 mt-2">
          <button onClick={() => setShowReplyForm(!showReplyForm)} className="text-blue-500 hover:underline text-sm">
            Reply
          </button>
        </div>
        {showReplyForm && (
          <div className="mt-2">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Write a reply..."
            />
             <button onClick={handleReply} className="mt-2 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm">
              Post Reply
            </button>
          </div>
        )}
        {commentReplies.length > 0 && (
          <div className="mt-4">
            {commentReplies.map((reply, index) => (
              <Reply key={index} {...reply} />
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-1 right-4 flex flex-col items-center space-y-1">
        <button onClick={handleUpvote} className="text-lg">⬆️</button>
        <span className="font-medium">{votes}</span>
        <button onClick={handleDownvote} className="text-lg">⬇️</button>
      </div>
    </div>
  );
};

export default Comment;
