import React, { useState, useEffect, useContext } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { AuthContext } from './AuthContext';
import './Comment.css';

interface Comment {
    text: string;
    author: string;
}

interface CommentContainerProps {
    userStoryId: number;
}

const CommentContainer: React.FC<CommentContainerProps> = ({ userStoryId }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const { user, hasPermission } = useContext(AuthContext);

    useEffect(() => {
        // Recupera i commenti dal database tramite API
        fetch(`/api/comments?userStoryId=${userStoryId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setComments(data))
            .catch(error => console.error('Errore nel recupero dei commenti:', error));
    }, [userStoryId]);

    const handleAddComment = (comment: Comment) => {
        if (user) {
            // Salva il commento nel database tramite API
            fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}` // Supponiamo che il token sia nel contesto utente
                },
                body: JSON.stringify({ ...comment, userStoryId })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(newComment => setComments([...comments, newComment]))
            .catch(error => console.error('Errore nell\'aggiunta del commento:', error));
        } else {
            console.error('User not authenticated');
        }
    };

    return (
        <div>
            <h5>Commenti sviluppatori</h5>
            <CommentList comments={comments} />
            {hasPermission('ADD_COMMENT') && user && (
                <CommentForm onAddComment={handleAddComment} />
            )}
        </div>
    );
};

export default CommentContainer;
