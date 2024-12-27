'use client'

import { useState, FormEvent } from 'react';
import { UserCircle, Send, ThumbsUp, Reply, MoreHorizontal } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  likes: number;
  timestamp: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "John Doe",
      content: "This is a fantastic article! Very insightful.",
      likes: 5,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "I'd love to hear more about this topic in future posts.",
      likes: 3,
      timestamp: "1 hour ago"
    }
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: comments.length + 1,
      author: "Current User",
      content: newComment,
      likes: 0,
      timestamp: "Just now"
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="mb-8">
        <div className="flex gap-4">
          <UserCircle className="w-10 h-10 text-gray-400" />
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-4 border rounded-lg resize-none h-24"
              placeholder="Write a comment..."
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                <Send className="w-4 h-4" />
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <UserCircle className="w-10 h-10 text-gray-400" />
            <div className="flex-1">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{comment.author}</h3>
                    <p className="text-sm text-gray-500">{comment.timestamp}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
              <div className="flex gap-4 mt-2 text-sm text-gray-500">
                <button className="flex items-center gap-1 hover:text-gray-700">
                  <ThumbsUp className="w-4 h-4" />
                  {comment.likes}
                </button>
                <button className="flex items-center gap-1 hover:text-gray-700">
                  <Reply className="w-4 h-4" />
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;