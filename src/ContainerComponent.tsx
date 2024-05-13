// ContainerComponent.tsx
import React from 'react';
import PresentationComponent from './PresentationComponent';

import ListEpicUserStory from './ListEpicUserStory';

const ContainerComponent: React.FC = () => {
  // La logica può essere gestita qui
  
  return (
    <div>
      <PresentationComponent />
      <ListEpicUserStory />
    </div>
  );
};

export default ContainerComponent;
