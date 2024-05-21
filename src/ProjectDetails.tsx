import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EpicStory from './EpicStory';

interface Project {
  id: number;
  title: string;
  client: string;
  startDate: string;
}

interface EpicStoryProp{
  name: string;
  desc: string;
  progress: number;
  userStoryArray: UserStoryProp[];
}
interface UserStoryProp{
  name: string;
  desc: string;
  progress: number;
  
}
const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [epicStories, setEpicStories] = useState<EpicStoryProp[]>([]);
  useEffect(() => {
    const fetchProject = async () => {
      // Sostituisci con il tuo endpoint API reale
      const response = await fetch(`/api/projects/${id}`);
      const data = await response.json();
      setProject(data);
      const responsEepic = await fetch(`/api/projects/${id}/epic-stories`);
      const dataEpic = await response.json();
      setEpicStories(data);
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
