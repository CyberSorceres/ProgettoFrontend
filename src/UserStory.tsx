import React from 'react';

import PopupFeedback from './PopupFeedback';

import DropdownContainer from './DropdownMenuContainer';

import CommentContainer from './CommentContainer';

import './UserStory.css'

const UserStory: React.FC = () => {
  return (
    <div>
        <h4>User Story</h4>
        <p>Descrizione</p>
        <progress className='progress-user-story' value="50" max="100"></progress>
        <CommentContainer />
        <PopupFeedback />
        <DropdownContainer />
    </div>
  )
};

export default UserStory;