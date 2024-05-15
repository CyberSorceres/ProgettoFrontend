import React from "react";

interface Project {
    title: string;
   
  }
  const projectsData: Project[] = [
    { title: 'Progetto 1' },
    { title: 'Progetto 2' },
    
  ];
;
const ProjectCreationButton: React.FC<{ project: Project; onClick: (newProject: Project) => void }> = ({ project, onClick }) => {
  const handleNewProjectClick = () => {
    const newProject: Project = { title: 'New Project' };
    projectsData.push(newProject);
    onClick(newProject);
    
  };
    return (
        <div className="project" onClick={handleNewProjectClick}>
      <h3>{project.title}</h3>
      
    </div>
    );
}

export default ProjectCreationButton;






