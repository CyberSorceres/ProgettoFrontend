import React from 'react';


import ProjectContainer from './ProjectContainer';

interface Project {
  title: string;
 
}
const projectsData: Project[] = [
  { title: 'Progetto 1' },
  { title: 'Progetto 2' },
  
];
const ProjectsPage: React.FC = () => {
  
  return (
    <div>
      <ProjectContainer projects={projectsData} />;
      
      
    </div>
  );
};


export default ProjectsPage;


