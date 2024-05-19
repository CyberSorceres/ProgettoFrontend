import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import './Comment.css';

interface Comment {
    text: string;
    author: string;
}

type AddCommentFunction = (comment: Comment) => void;

interface CommentFormProps {
    onAddComment: AddCommentFunction;
}

const CommentForm = ({ onAddComment }: CommentFormProps) => {
    const [text, setText] = useState('');
    const { user } = useContext(AuthContext);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user) { // Verifica se l'utente è definito
            onAddComment({ author: user.name, text });
            setText('');
        } else {
            console.error('User not authenticated');
        }
    };

    if (!user) {
        return <p>Devi essere autenticato per lasciare un commento.</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
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
