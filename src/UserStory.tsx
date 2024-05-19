import React from 'react';
import PopupFeedback from './PopupFeedback';
import DropdownContainer from './DropdownMenuContainer';
import CommentContainer from './CommentContainer';
import './UserStory.css';

const UserStory: React.FC = () => {
  const description = "Descrizione"; // Puoi ottenere questo valore dinamicamente se necessario
  const userStoryId = 1; // Supponiamo di avere un ID statico per ora

  return (
    <div>
        <h4>User Story</h4>
        <p>{description}</p>
        <progress className='progress-user-story' value="50" max="100"></progress>
        <CommentContainer userStoryId={userStoryId} />
        <PopupFeedback description={description} />
        <DropdownContainer />
    </div>
  );
};

export default UserStory;
