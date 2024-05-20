import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EpicStory from './EpicStory';
import UserStory from './UserStory';

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
const EpicDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [userStories, setEpicStories] = useState<UserStoryProp[]>([]);
  useEffect(() => {
    const fetchProject = async () => {
      // Sostituisci con il tuo endpoint API reale
      const response = await fetch(`/api/projects/${id}`);
      const data = await response.json();
      setProject(data);
      const responseUser = await fetch(`/api/projects/${id}/user-stories`);
      const dataUser= await response.json();
      setEpicStories(data);
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <UserStory></UserStory>;
    //<div>Loading...</div>;
  }

  return (
   <UserStory></UserStory>
  );
};

export default EpicDetails;
