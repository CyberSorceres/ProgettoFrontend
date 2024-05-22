import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EpicStory from './EpicStory';
import UserStory from './UserStory';
import BackButton from './BackButton';

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
  const [userStories, setUserStories] = useState<UserStoryProp[]>([]);
  useEffect(() => {
    const fetchProject = async () => {
      // Sostituisci con il tuo endpoint API reale
	/*const response = await fetch(`/api/projects/${id}`);
      const data = await response.json();
      setProject(data);
      const responseUser = await fetch(`/api/projects/${id}/user-stories`);
      const dataUser= await response.json();
      setEpicStories(data);*/
	setUserStories({ id: 1, title: 'ChatGPT vs Bedrock', client: 'Zero12', startDate: '11/05/2024' , epicStory: {1: {
	    
	}}})
    };

    fetchProject();
  }, [id]);

  if (!userStories) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <UserStory userStory={userStories.id}></UserStory>
      </div>
  );
};

export default EpicDetails;
