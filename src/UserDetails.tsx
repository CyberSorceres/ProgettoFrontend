import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EpicStory from './EpicStory';
import UserStory from './UserStory';
import BackButton from './BackButton';
import DataTable, { TableColumn } from 'react-data-table-component';
import DropdownButton from './DropdownButton';
import DropdownContainer from './DropdownMenuContainer';
import './UserDetails.css'
import PopupFeedback from './PopupFeedback';
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
  
  
}

const fakeUser={

  name: 'User can view project details',
  desc: 'Provide information about Project Alpha dssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',

}

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  
  const [records, setRecords] = useState<any[]>([]);
  return(
    <div>
      <BackButton/>

      <div className="card">
      <div className="card-details">
      <p className="text-title">{fakeUser.name}</p>
       <p className="text-body">{fakeUser.desc}</p>
       </div>
       <div className='divBtn'>
       <DropdownContainer />
       <PopupFeedback/>
       </div>
       
     
      </div>
      
    
    
      
      
     </div>
    
  );

};
export default UserDetails

