import React from "react";
import projectsData from "./ProjectsPage"
interface Project {
    title: string;
   
  }

;
const ProjectCreationButton: React.FC<{ project: Project; onClick: (newProject: Project) => void }> = ({ project, onClick }) => {
  const handleNewProjectClick = () => {
      const newProject: Project = { title: 'New Project' };
      onClick(newProject); // Pass newProject to the onClick function
  };

  return (
      <div className="project" onClick={handleNewProjectClick}>
          <h3>{project.title}</h3>
      </div>
  );
}

export default ProjectCreationButton;






