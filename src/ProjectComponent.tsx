import React from "react";
interface Project {
    title: string;
   
  }
const ProjectComponent: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
    return (
      <div className="project" onClick={onClick}>
        <h3>{project.title}</h3>
        
      </div>
    );
  };

  export default ProjectComponent;