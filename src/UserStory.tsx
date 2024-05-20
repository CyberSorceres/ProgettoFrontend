
import CommentContainer from './CommentContainer';
import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Table.css';
import fakeData from './EpicStory';
import EpicStory from './EpicStory';
import PopupFeedback from './PopupFeedback';
import ProjectDetails from './ProjectDetails';
import DropdownContainer from './DropdownMenuContainer';

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
  const [records, setRecords] = useState<UserStoryProp[]>(epicStory.userStoryArray);

  const handleRowClick = (fakeData: UserStoryProp) => {
    navigate(`/UserStory/${fakeData.id}`);
  };
 
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