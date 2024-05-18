import React, { useState } from "react";
import "./ProjectBarStyle.css";
import ProjectCreationButton from "./ProjectCreationButton";
import ProjectComponent from "./ProjectComponent";
import ProjectDetailComponent from "./ProjectDetailComponent";
import handleCloseProject from "./ProjectContainer";

interface Project {
  title: string;
}

const ProjectBarComponent: React.FC<{
  projects: Project[];
  onProjectClick: (index: number) => void;
  handleNewProjectClick: (project: Project) => void;
}> = ({ projects, onProjectClick, handleNewProjectClick }) => {
  const handleProjectSelection = (index: number) => {
    
  };

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

      <ProjectCreationButton
        title={"Crea nuovo progetto"}
        onClick={handleNewProjectClick}
        
      />
    </div>
  );
};

export default ProjectBarComponent;