import React from 'react';

import PopupFeedback from './PopupFeedback';

const UserStory: React.FC = () => {
  return (
    <div className="UserStoryDiv">
        <h4>User Story</h4>
        <p>Descrizione</p>
        <progress value="50" max="100"></progress>
        <PopupFeedback />
    </div>
  )
};

export default UserStory;