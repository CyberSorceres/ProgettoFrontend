import React from 'react';
import Comment from './Comment';

import './Comment.css';

interface CommentListProps {
  comments: { text: string, author: string }[];
}

const CommentList = ({ comments }: CommentListProps) => (
  <div className="comment-list">
    {comments.map((comment, index) => (
      <Comment key={index} comment={comment} />
    ))}
  </div>
);

export default CommentList;
