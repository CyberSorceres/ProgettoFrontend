import React, { useState } from 'react';

import './Comment.css';

type AddCommentFunction = (comment: { author: string, text: string }) => void;

interface CommentFormProps {
  onAddComment: AddCommentFunction;
}

const CommentForm = ({ onAddComment }: CommentFormProps) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddComment({ author, text });
    setAuthor('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Autore:</label>
        <input 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Commento:</label>
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          required 
        ></textarea>
      </div>
      <button type="submit">Aggiungi commento</button>
    </form>
  );
};

export default CommentForm;
