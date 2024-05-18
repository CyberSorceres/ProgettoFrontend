import React from 'react';

import './Comment.css';

interface Comment {
    text: string;
    author: string;
  }

const Comment = ({ comment }: { comment: Comment }) => (
  <div className="comment">
    <p>{comment.text}</p>
    <small>By: {comment.author}</small>
  </div>
);

export default Comment;
