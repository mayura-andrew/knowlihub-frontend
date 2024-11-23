import React, { useState } from 'react';
import { CommentProps } from '@/types/types';
import Reply from '../features/Reply.component';
import { MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Comment: React.FC<CommentProps> = ({ 
  author, 
  text, 
  avatar, 
  date, 
  replies, 
  position 
}) => {
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
        author: author,
        text: replyText,
        position: position,
        avatar: avatar,
        date: new Date().toISOString(),
        replies: [],
      };
      setCommentReplies([...commentReplies, newReply]);
      setReplyText('');
      setShowReplyForm(false);
    }
  };

  return (
    <div className="relative flex gap-4 p-5 border border-[#DEE2E6] rounded-lg bg-white font-['Roboto']">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img 
          src={avatar} 
          alt={author} 
          className="w-10 h-10 rounded-full ring-2 ring-[#007BFF]/10"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex justify-between text-left items-start mb-2">
          <div>
            <h4 className="font-semibold text-[#212529]">{author}</h4>
            <div className="flex items-center gap-2 text-xs text-[#6C757D]">
              <span className="font-medium">{position}</span>
              <span>•</span>
              <time className="text-[#6C757D]">
                {new Date(date).toLocaleDateString()}
              </time>
            </div>
          </div>

          {/* Voting */}
          <div className="flex items-center gap-1 bg-[#F8F9FA] rounded-full px-2 py-1">
            <button 
              onClick={handleUpvote}
              className="p-1 text-[#6C757D] hover:text-[#28A745] transition-colors"
              aria-label="Upvote"
            >
              <ThumbsUp size={14} />
            </button>
            <span className="text-sm font-medium text-[#212529] min-w-[20px] text-center">
              {votes}
            </span>
            <button 
              onClick={handleDownvote}
              className="p-1 text-[#6C757D] hover:text-[#DC3545] transition-colors"
              aria-label="Downvote"
            >
              <ThumbsDown size={14} />
            </button>
          </div>
        </div>

        {/* Comment Text */}
        <p className="text-[#495057] text-sm leading-relaxed mb-3">
          {text}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="flex items-center gap-1 text-xs font-medium text-[#007BFF] hover:text-[#0056b3] transition-colors"
          >
            <MessageSquare size={14} />
            Reply
          </button>
        </div>

        {/* Reply Form */}
        {showReplyForm && (
          <div className="mt-4 space-y-3">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full p-3 text-sm border border-[#DEE2E6] rounded-lg placeholder-[#6C757D] 
                       focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent
                       transition-all resize-none"
              placeholder="Share your thoughts..."
              rows={3}
            />
            <div className="flex justify-end gap-2">
              <Button 
                onClick={() => setShowReplyForm(false)}
                className="px-4 py-2 text-xs font-medium text-[#6C757D] bg-white border border-[#DEE2E6] 
                         hover:bg-[#F8F9FA] rounded-full transition-colors"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleReply}
                className="px-4 py-2 text-xs font-medium text-white bg-[#007BFF] 
                         hover:bg-[#0056b3] rounded-full transition-colors"
                disabled={!replyText.trim()}
              >
                Post Reply
              </Button>
            </div>
          </div>
        )}

        {/* Replies */}
        {commentReplies.length > 0 && (
          <div className="mt-4 space-y-3 pl-4 border-l-2 border-[#DEE2E6]">
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