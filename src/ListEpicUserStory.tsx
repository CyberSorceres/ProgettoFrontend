import React from 'react';

import './ListEpicUserStory.css';

import EpicStory from './EpicStory'; 
import AddRequestButton from './AddRequestButton';

const ListEpicUserStory: React.FC = () => {
  return (
    <div className="ListEpicUserStoryListDiv">
      
        <EpicStory />
       
    </div>
  )
};

export default ListEpicUserStory;