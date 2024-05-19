import React from 'react';

import UserStory from './UserStory';
import PopupFeedback from './PopupFeedback';

import DropdownContainer from './DropdownMenuContainer';

import './EpicStory.css'

const EpicStory: React.FC = () => {
  const description = "Descrizione"; // Puoi ottenere questo valore dinamicamente se necessario

  return (
    <div>
      <div className="EpicStoryDiv">
          <h3>Epic Story</h3>
          <p>{description}</p>
          <progress className="progress-epic-story" value="50" max="100"></progress>
          <PopupFeedback description={description} />
          <DropdownContainer />
      </div>
      <div className='UserStoryDiv'>
          <UserStory />
      </div>
    </div>
  )
};

export default EpicStory;
