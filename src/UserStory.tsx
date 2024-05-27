
import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Table.css';
import BackButton from './BackButton';
import DelateUser from './DelateUser';
import RowDetails from './UserDetails';
import './UserStory.css'
import { EpicStory } from 'progettolib';

interface UserStoryProp{
  id: number;
  name: string;
  desc: string;
  progress: boolean;
}

const UserStory: React.FC = () => {

const columns: TableColumn<UserStoryProp>[] = [
  
  {
    name: 'Tag',
    selector: (row: UserStoryProp) => row.id,
    cell: (row: UserStoryProp) => <span>{row.tag}</span>,
    width:'10%',
    sortable: true,
  },
  {
    name: 'Titolo',
    selector: (row: UserStoryProp) => row.name,
    cell: (row: UserStoryProp) => <span>{row.description}</span>,
    sortable: true,
  },

  {
    name: 'Completata',
    selector: (row: UserStoryProp) => row.progress ?? 0.5,
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
    const data = useLoaderData() as EpicStory;
    if (!data) return <>Loading...</>
	const [records, setRecords] = useState<any[]>(data._userStoriesIds);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleToggleMenuOpen = () => {
    setIsOverlayVisible(true);
  };

  const handleToggleMenuClose = () => {
    setIsOverlayVisible(false);
  };

  
  function handleFilter(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredRecords = 
      data._userStoriesIds.filter((userStory) =>
        userStory.description.toLowerCase().includes(value)
      )

    setRecords(filteredRecords);
  };

  const handleRowClick = (row:UserStoryProp) => {
    setSelectedRowId(row.tag === selectedRowId ? null : row.tag);
  };

  const handleRowExpandToggled = (expanded: boolean, row: UserStoryProp) => {
    setSelectedRowId(expanded ? row.tag : null);
  };


  return (
   
    <div>
      <h3 className='pageTitle'>{data.descrizione}</h3>
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
        expandableRowExpanded={(row) => row.tag === selectedRowId}
        onRowClicked={handleRowClick}
        onRowExpandToggled={handleRowExpandToggled}
        expandableRowsComponent={({ data }) => <RowDetails data={data} />}
       />
       </div>
      <BackButton />
      </div>
      
      
    </div>
   
  )
};

export default UserStory;
