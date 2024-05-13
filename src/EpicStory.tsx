import React from 'react';

import UserStory from './UserStory';

const EpicStory: React.FC = () => {
  return (
    <div className="EpicStoryDiv">
        <h3>Epic Story</h3>
        <p>Descrizione</p>
        <progress value="50" max="100"></progress>
        <button>Bottone</button>
        <UserStory />
    </div>
  )
};

export default EpicStory;