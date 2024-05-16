import React, { useState } from "react";
import projectsData from "./ProjectsPage";
interface Project {
  title: string;
}

const ProjectCreationButton: React.FC<{
  title: string;
  onClick: (newProject: Project) => void;
}> = ({ title, onClick }) => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const handleNewProjectClick = () => {
    const newProject: Project = { title: "New Project" };
    onClick(newProject); // Pass newProject to the onClick function
  };

  return (
    <div className="project" onClick={handleNewProjectClick}>
      <h3>{title}</h3>
    </div>
  );
};

export default ProjectCreationButton;
