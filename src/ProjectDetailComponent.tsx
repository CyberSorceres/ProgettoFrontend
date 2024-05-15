
import React from "react";
import ListEpicUserStory from './ListEpicUserStory';
interface Project {
    title: string;
   
  }


const ProjectDetailComponent: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
    return (
      <div className="project-detail">
        <h2>{project.title}</h2>
        <ListEpicUserStory />
        <button onClick={onClose}>Chiudi</button>
      </div>
    );
  };

  export default ProjectDetailComponent;

