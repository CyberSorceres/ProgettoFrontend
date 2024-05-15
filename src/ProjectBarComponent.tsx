import React, { useState } from 'react';
import './ProjectBarStyle.css';
import ProjectCreationButton from './ProjectCreationButton';
import ProjectComponent from './ProjectComponent';

interface Project {
  title: string;
 
}

const ProjectBarComponent: React.FC<{ projects: Project[]; onProjectClick: (index: number) => void }> = ({ projects, onProjectClick }) => {
  const [projectsData, setProjectsData] = useState<Project[]>(projects);

  const handleNewProjectClick = (newProject: Project) => {
      setProjectsData([...projectsData, newProject]); // Add newProject to projectsData array
  };

  return (
      <div className="ProjectBarStyle">
          <h2>Progetti</h2>
          {projectsData.map((project, index) => (
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

