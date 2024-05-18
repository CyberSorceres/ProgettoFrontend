import React, { useState } from "react";

import ProjectContainer from "./ProjectContainer";

interface Project {
  title: string;
}

const ProjectsPage: React.FC = () => {
  const [projectsData, setProjectsData] = useState([
    { title: "Progetto 1" },
    { title: "Progetto 2" },
  ]);
  const handleNewProjectClick = (newProject: Project) => {
    console.log("hi");
    //setSelectedProject(newProject); // Set the newly created project as selected
    setProjectsData([...projectsData, newProject]);
  };
  return (
    <div>
      <ProjectContainer
        projects={projectsData}
        handleNewProjectClick={handleNewProjectClick}
      />
      
    </div>
  );
};

export default ProjectsPage;
