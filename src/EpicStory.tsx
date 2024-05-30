import React, { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import './Table.css';
import BackButton from './BackButton';
import UserStory from './UserStory';
import PopupFeedback from './PopupFeedback';
import DropdownContainer from './DropdownMenuContainer';
import DelateEpic from './DelateEpic';
import './EpicStory.css';
import { Progetto } from 'progettolib';
import AddEpicStoryButton from './AddEpicStory';
import InviteUserButton from './InviteUserButton'
import BusinessRequest from './BusinessRequest'
import ClipLoader from 'react-spinners/ClipLoader';
import { useLoading } from './LoadingContext';

interface EpicStoryProp {
  _id: number;
  description: string;
  progress: number;
}

const columns: TableColumn<EpicStoryProp>[] = [

  {
    name: 'Despription',
    selector: (row: EpicStoryProp) => row.description,
    cell: (row: EpicStoryProp) => <span>{row.description}</span>,
  },
  {
    name: 'Progress',
    selector: (row: EpicStoryProp) => row.progress || 0.5,
    cell: (row: EpicStoryProp) => (
      <progress className="progress-epic-story" value={row.progress} max="100" />
    ),
    width:'25%',
    },
  /*{
    name: 'Actions',
    cell: (row: EpicStoryProp) => <DropdownContainer />,
  },*/
];

const EpicStory: React.FC = () => {
    const project = useLoaderData() as Progetto;
    const navigate = useNavigate();
    const navigation = useNavigation();
    const [records, setRecords] = useState<EpicStoryProp[]>(project.epicStoriesIds as any);
    const { isLoading, setLoading } = useLoading();

    useEffect(() => {
      if (navigation.state === 'loading') {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }, [navigation.state, setLoading]);

    const handleRowClick = (data: {_id: string}) => {
	    navigate(`epic/${data._id}`);
    };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newData = (project.epicStoriesIds as any[]).filter((row) => {
      return row.description.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  };

  return (
      <div>
	  <BusinessRequest />

      <h3 className='pageTitle'>{project.name}</h3>
      <div className="EpicStoryDiv">
        
          <AddEpicStoryButton></AddEpicStoryButton>
	  <InviteUserButton> </InviteUserButton>
    {isLoading && (
        <div className="loading-spinner">
          <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
          <p>Caricamento in corso...</p>
        </div>
      )}
        <div className='textSearch'><input type="text" placeholder="Search" onChange={handleFilter}/></div>
          <DataTable
        columns={columns}
        data={records}
        highlightOnHover
        pagination
        onRowClicked={handleRowClick}
        
      />
<BackButton />
      </div>
    </div>
  );
};

export default EpicStory;
