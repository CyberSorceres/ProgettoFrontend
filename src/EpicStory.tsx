import React from 'react';

import UserStory from './UserStory';
import PopupFeedback from './PopupFeedback';

const EpicStory: React.FC = () => {
  return (
    <div className="EpicStoryDiv">
        <h3>Epic Story</h3>
        <p>Descrizione</p>
        <progress value="50" max="100"></progress>
        <PopupFeedback />
        <UserStory />
    </div>
  )
};

export default EpicStory;