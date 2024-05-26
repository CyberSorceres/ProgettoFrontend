
import CommentContainer from './CommentContainer';
import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Table.css';
import BackButton from './BackButton';
import EpicStory from './EpicStory';
import PopupFeedback from './PopupFeedback';
import ProjectDetails from './ProjectDetails';
import DelateUser from './DelateUser';
import DropdownContainer from './DropdownMenuContainer';
import { useEffect } from 'react';
import RowDetails from './UserDetails';

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
  progress: boolean;
  
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
        progress: true,
      },
      {
        id: 2,
        name: 'User can view model details',
        desc: 'Provide detailed information about AI models aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        progress: false,
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
        id: 3,
        name: 'User can view project details',
        desc: 'Provide information about Project Alpha',
        progress: false,
      },
      {
        id: 4,
        name: 'User can submit feedback',
        desc: 'Allow users to provide feedback on Project Alpha',
        progress: true,
      },
    ],
  },
];
const UserStory: React.FC<EpicStoryProps> = ({ epicStory }) => {

const columns: TableColumn<UserStoryProp>[] = [
  
  {
    name: 'Tag',
    selector: (row: UserStoryProp) => row.id,
    cell: (row: UserStoryProp) => <span>{row.id}</span>,
    width:'10%',
    sortable: true,
  },
  {
    name: 'Titolo',
    selector: (row: UserStoryProp) => row.name,
    cell: (row: UserStoryProp) => <span>{row.name}</span>,
    sortable: true,
  },

  {
    name: 'Finita',
    selector: (row: UserStoryProp) => row.progress,
    cell: (row: UserStoryProp) => (
      <span>
      {row.progress ? (
        <i className="fas fa-check" style={{ color: 'green' }} />
      ) : (
        <i className="fas fa-times" style={{ color: 'red' }} />
      )}
    </span>    ),
    width:'15%',
    sortable: true,
  },
  {
    name: '',
    cell: (row: UserStoryProp) => <DelateUser user={row} />,
    width:'10%',
  },

];

const handleButtonClick = (row: UserStoryProp) => {
  // Handle button click logic here
  console.log('Button clicked for row:', row);
};

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [records, setRecords] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleToggleMenuOpen = () => {
    setIsOverlayVisible(true);
  };

  const handleToggleMenuClose = () => {
    setIsOverlayVisible(false);
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
  
  function handleFilter(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredRecords = fakeData.flatMap((item) =>
      item.userStoryArray.filter((userStory) =>
        userStory.name.toLowerCase().includes(value)
      )
    );
    setRecords(filteredRecords);
  };

  const handleRowClick = (row:UserStoryProp) => {
    setSelectedRowId(row.id === selectedRowId ? null : row.id);
  };

  const handleRowExpandToggled = (expanded: boolean, row: UserStoryProp) => {
    setSelectedRowId(expanded ? row.id : null);
  };

  const customExpanderIcon = (row: UserStoryProp) => (
    <div onClick={() => handleRowClick(row)}>
      {selectedRowId === row.id ? (
        <i className="fas fa-chevron-up" />
      ) : (
        <i className="fas fa-chevron-down" />
      )}
    </div>
  );

  return (
   
    <div>
      
      <div className={`UserStoryDiv ${isOverlayVisible ? 'overlay-active' : ''}`}>
      {isOverlayVisible && <div className="overlay" onClick={handleToggleMenuClose}></div>}
      
          
          <div className='textSearch'><input type="text" placeholder="Search" onChange={handleFilter}/></div>
        <div className='data-table-wrapper'>
        <DataTable
        columns={columns}
        data={records}
        pagination
        expandOnRowClicked
        highlightOnHover
        expandableRows
        onRowClicked={handleRowClick}
        onRowExpandToggled={handleRowExpandToggled}
        expandableRowExpanded={(row) => row.id === selectedRowId}
       expandableRowsComponent={({ data }) => <RowDetails data={data} />}
       />
       </div>
      <BackButton />
      </div>
      
      
    </div>
   
  )
};

export default UserStory;