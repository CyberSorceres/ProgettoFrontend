
import React from "react";
import ListEpicUserStory from './ListEpicUserStory';
interface Project {
    title: string;
   
  }


const ProjectCreationDetails: React.FC<{ project: Project; onClose: (arg: any) => void }> = ({ project, onClose }) => {
    return (
      <div className="project-detail">
        <h2>{project.title}</h2>
        <ListEpicUserStory />
        <button onClick={onClose}>Chiudi</button>
      </div>
    );
  };

  export default ProjectCreationDetails;