import React, { useState } from 'react';
import ProjectBarComponent from './ProjectBarComponent';
import ProjectDetailComponent from './ProjectDetailComponent';
import selectedProject from './ProjectBarComponent';
import ProjectCreationButton from './ProjectCreationButton';
import handleNewProjectClick from './ProjectCreationButton';


import './ProjectPage.css' 
interface Project {
    title: string;
   
  }

const ProjectContainer: React.FC<{ projects: Project[] }> = ({ projects }) => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
    const [projectsData, setProjectsData] = useState<Project[]>(projects);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
    const handleProjectClick = (index: number) => {
      setSelectedProjectIndex(index);
    };
  
    const handleCloseProject = () => {
      setSelectedProjectIndex(null);
    };
    const handleNewProjectClick = (newProject: Project) => {
      
      setProjectsData([...projectsData, newProject]); // Add newProject to projectsData array
      setSelectedProject(newProject); // Set the newly created project as selected
  };
  

    
    return (
      <div className="project-page">
        <div className="project-column">
          <ProjectBarComponent
            projects={projects}
            onProjectClick={handleProjectClick}
          />
          
          
        </div>
        <div className="project-column">
          
          {selectedProjectIndex !== null && (
            <ProjectDetailComponent
              project={projects[selectedProjectIndex]}
              onClose={handleCloseProject}
            />
            
          )}
          
        </div>
        
      </div>
    );
  };

 
  export default ProjectContainer
  