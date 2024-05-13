import React from 'react';

const UserStory: React.FC = () => {
  return (
    <div className="UserStoryDiv">
        <h4>User Story</h4>
        <p>Descrizione</p>
        <progress value="50" max="100"></progress>
        <button>Bottone</button>
    </div>
  )
};

export default UserStory;