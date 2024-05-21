
import CommentContainer from './CommentContainer';
import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Table.css';

import EpicStory from './EpicStory';
import PopupFeedback from './PopupFeedback';
import ProjectDetails from './ProjectDetails';
import DropdownContainer from './DropdownMenuContainer';
import { useEffect } from 'react';

import './UserStory.css'
interface EpicStoryProp{
  id: number;
  name: string;
  desc: string;
  progress: number;
  userStoryArray: UserStoryProp[];
}
interface UserStoryProp{
  id: number;
  name: string;
  desc: string;
  progress: number;
  
}
interface EpicStoryProps {
  epicStory: EpicStoryProp;
}
const fakeData = [
  {
    id: 1,
    name: 'ChatGPT vs Bedrock',
    desc: 'Comparison between ChatGPT and Bedrock',
    progress: 0,
    userStoryArray: [
      {
        id: 1,
        name: 'User can compare models',
        desc: 'Allow users to compare different AI models',
        progress: 90,
      },
      {
        id: 2,
        name: 'User can view model details',
        desc: 'Provide detailed information about AI models',
        progress: 80,
      },
    ],
  },
  {
    id: 2,
    name: 'Project Alpha',
    desc: 'Description of Project Alpha',
    progress: 70,
    userStoryArray: [
      {
        id: 1,
        name: 'User can view project details',
        desc: 'Provide information about Project Alpha',
        progress: 60,
      },
      {
        id: 2,
        name: 'User can submit feedback',
        desc: 'Allow users to provide feedback on Project Alpha',
        progress: 30,
      },
    ],
  },
];
const columns: TableColumn<UserStoryProp>[] = [
  {
    name: 'Name',
    selector: (row: UserStoryProp) => row.name,
    cell: (row: UserStoryProp) => <span>{row.name}</span>,
  },
  {
    name: 'Description',
    selector: (row: UserStoryProp) => row.desc,
    cell: (row: UserStoryProp) => <span>{row.desc}</span>,
  },
  {
    name: 'Progress',
    selector: (row: UserStoryProp) => row.progress,
    cell: (row: UserStoryProp) => (
      <progress className="progress-epic-story" value={row.progress} max="100" />
    ),
  },
];
const UserStory: React.FC<EpicStoryProps> = ({ epicStory }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [records, setRecords] = useState<any[]>([]);

  const handleRowClick = (fakeData: UserStoryProp) => {
    navigate(`/UserStory/${fakeData.id}`);
  };
  useEffect(() => {
    // Map over the userStoryArray in fakeData and create a new array of objects
    const newRecords = fakeData.map((item) => {
      return item.userStoryArray.map((userStory) => {
        return {
          id: userStory.id,
          name: userStory.name,
          desc: userStory.desc,
          progress: userStory.progress,
        };
      });
    });
    const flattenedRecords = newRecords.flat();

    setRecords(flattenedRecords);
  }, [epicStory]);
  return (
    <div>
      
      <div className="EpicStoryDiv">
          
          
         
          <PopupFeedback />
          <DropdownContainer />
          <DataTable
        columns={columns}
        data={records}
        highlightOnHover
        pagination
        onRowClicked={handleRowClick}
      />
      </div>
      
      
    </div>
  )
};

export default UserStory;