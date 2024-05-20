import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Table.css';
import UserStory from './UserStory';
import PopupFeedback from './PopupFeedback';
import ProjectDetails from './ProjectDetails';
import DropdownContainer from './DropdownMenuContainer';

import './EpicStory.css'
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
interface Project {
  id: number;
  title: string;
  client: string;
  startDate: string;
}
type TableEpicStoryProp = Omit<EpicStoryProp, 'userStoryArray'>;
const columns: TableColumn<EpicStoryProp>[] = [
  {
    name: 'Name',
    selector: (row: EpicStoryProp) => row.name,
    cell: (row: EpicStoryProp) => <span>{row.name}</span>,
  },
  {
    name: 'Description',
    selector: (row: EpicStoryProp) => row.desc,
    cell: (row: EpicStoryProp) => <span>{row.desc}</span>,
  },
  {
    name: 'Progress',
    selector: (row: EpicStoryProp) => row.progress,
    cell: (row: EpicStoryProp) => (
      <progress className="progress-epic-story" value={row.progress} max="100" />
    ),
  },
];


const EpicStory: React.FC<EpicStoryProps> = ({ epicStory }) => {
  const { id } = useParams<{ id: string }>();
  
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
  const navigate = useNavigate();
  const [records, setRecords] = useState<EpicStoryProp[]>(fakeData);
  const handleRowClick = (fakeData: UserStoryProp) => {
    navigate(`/project/:id/userstory/:id/${fakeData.id}`);
  };
  function handleFilter(event: React.ChangeEvent<HTMLInputElement>): void {
    const newData = fakeData.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }
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

export default EpicStory;