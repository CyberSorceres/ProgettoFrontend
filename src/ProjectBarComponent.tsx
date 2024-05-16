import React, { useState } from 'react';
import './ProjectBarStyle.css';
import ProjectCreationButton from './ProjectCreationButton';
import ProjectComponent from './ProjectComponent';
import ProjectDetailComponent from './ProjectDetailComponent';
import handleCloseProject from './ProjectContainer';

interface Project {
  title: string;
 
}

const ProjectBarComponent: React.FC<{ projects: Project[]; onProjectClick: (index: number) => void }> = ({ projects, onProjectClick }) => {
  const [projectsData, setProjectsData] = useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNewProjectClick = (newProject: Project) => {
    setProjectsData([...projectsData, newProject]); // Add newProject to projectsData array
    setSelectedProject(newProject); // Set the newly created project as selected
    
};

  const handleProjectSelection = (index: number) => {
    setSelectedProject(projectsData[index]);
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
          
          <ProjectCreationButton title={  'Crea nuovo progetto' } onClick={handleNewProjectClick} />
      </div>
  );
};


export default ProjectBarComponent;

