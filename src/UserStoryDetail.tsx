import React from 'react';
import { useParams } from 'react-router-dom';
import { fakeData } from './fakeData.ts';
import BackButton from './BackButton.tsx';
import './UserStoryDetail.css';

interface UserStoryProp {
  id: number;
  name: string;
  desc: string;
  progress: number;
}

const UserStoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userStoryId = parseInt(id, 10);

  const userStory = fakeData.flatMap(item => item.userStoryArray).find(us => us.id === userStoryId);

  if (!userStory) {
    return <div>UserStory non trovata</div>;
  }

  return (
    <div className="user-story-detail-container">
      <h1>{userStory.name}</h1>
      <p>{userStory.desc}</p>
      <progress className="progress-epic-story" value={userStory.progress} max="100" />
      <BackButton className="back-button" />
    </div>
  );
};

export default UserStoryDetail;
