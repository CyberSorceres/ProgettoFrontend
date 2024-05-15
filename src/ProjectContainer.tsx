import React, { useState } from 'react';
import ProjectBarComponent from './ProjectBarComponent';
import ProjectDetailComponent from './ProjectDetailComponent';

import './ProjectPage.css' 
interface Project {
    title: string;
   
  }

const ProjectContainer: React.FC<{ projects: Project[] }> = ({ projects }) => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  
    const handleProjectClick = (index: number) => {
      setSelectedProjectIndex(index);
    };
  
    const handleCloseProject = () => {
      setSelectedProjectIndex(null);
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
  