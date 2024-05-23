import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

import './index.css';

interface Comment {
    text: string;
    author: string;
  }
  
  const CommentContainer = () => {
    const [comments, setComments] = useState<Comment[]>([]); 
    
    const handleAddComment = (comment: Comment) => {
      setComments([...comments, comment]);
    };
  
    return (
      <div>
        <h5>Commenti sviluppatori</h5>
        <CommentList comments={comments} />
        <CommentForm onAddComment={handleAddComment} />
      </div>
    );
  };
  
  export default CommentContainer;
