import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EpicStory from './EpicStory';

interface Project {
  id: number;
  title: string;
  client: string;
  startDate: string;
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      // Sostituisci con il tuo endpoint API reale
      const response = await fetch(`/api/projects/${id}`);
      const data = await response.json();
      setProject(data);
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <EpicStory></EpicStory>
    //<div>Loading...</div>;
  }

  return (
   <EpicStory></EpicStory>
  );
};

export default ProjectDetails;
