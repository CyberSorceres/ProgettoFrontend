import React, { useState } from "react";
import ProjectBarComponent from "./ProjectBarComponent";
import ProjectDetailComponent from "./ProjectDetailComponent";
import selectedProject from "./ProjectBarComponent";
import ProjectCreationButton from "./ProjectCreationButton";
import handleNewProjectClick from "./ProjectCreationButton";

import "./ProjectPage.css";
interface Project {
  title: string;
}

const ProjectContainer: React.FC<{
  projects: Project[];
  handleNewProjectClick: (p: Project) => void;
}> = ({ projects, handleNewProjectClick}) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index);
  };

  const handleCloseProject = () => {
    setSelectedProjectIndex(null);
  };

  return (
    <div className="project-page">
    <ProjectCreationButton
        title={"Crea nuovo progetto"}
        onClick={handleNewProjectClick}
      />
    </div>
  );
};

export default ProjectContainer;
