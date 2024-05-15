import React, { useState } from 'react';
import './ProjectBarStyle.css';
import ProjectCreationButton from './ProjectCreationButton';
import ProjectComponent from './ProjectComponent';

interface Project {
  title: string;
 
}

const ProjectBarComponent: React.FC<{ projects: Project[]; onProjectClick: (index: number) => void; handleNewProjectClick: () => void }> = ({ projects, onProjectClick, handleNewProjectClick }) => {
  return (
    <div className="ProjectBarStyle">
      <h2>Progetti</h2>
      {projects.map((project, index) => (
        <ProjectComponent
          key={index}
          project={project}
          onClick={() => onProjectClick(index)}
        />
      ))}
      <ProjectCreationButton project={{ title: 'Crea nuovo progetto' }} onClick={handleNewProjectClick} />
    </div>
    
  );
};


export default ProjectBarComponent;

