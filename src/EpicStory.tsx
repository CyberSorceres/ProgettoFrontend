import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import './Table.css';
import BackButton from './BackButton';
import UserStory from './UserStory';
import PopupFeedback from './PopupFeedback';
import DropdownContainer from './DropdownMenuContainer';
import './EpicStory.css';
import { Progetto } from 'progettolib';

interface EpicStoryProp {
  _id: number;
  description: string;
  progress: number;
}

const columns: TableColumn<EpicStoryProp>[] = [
  {
    name: 'Id',
    selector: (row: EpicStoryProp) => row._id,
    cell: (row: EpicStoryProp) => <span>{row._id}</span>,
  },
  {
    name: 'Name',
    selector: (row: EpicStoryProp) => row.description,
    cell: (row: EpicStoryProp) => <span>{row.description}</span>,
  },
  {
    name: 'Progress',
    selector: (row: EpicStoryProp) => row.progress || 0.5,
    cell: (row: EpicStoryProp) => (
      <progress className="progress-epic-story" value={row.progress} max="100" />
    ),
  },
  /*{
    name: 'Actions',
    cell: (row: EpicStoryProp) => <DropdownContainer />,
  },*/
];

const EpicStory: React.FC = () => {
    const project = useLoaderData() as Progetto;
    const navigate = useNavigate();
    const [records, setRecords] = useState<EpicStoryProp[]>(project.epicStoriesIds as any);
    console.log(project.epicStoriesIds)

    const handleRowClick = (data: {_id: string}) => {
    navigate(`epic/${data._id}`);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const newData = (project.epicStoriesIds as any[]).filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  };

  return (
    <div>
      <div className="EpicStoryDiv">
        <BackButton />
        <div className='textSearch'><input type="text" placeholder="Search" onChange={handleFilter}/></div>
          <DataTable
        columns={columns}
        data={records}
        highlightOnHover
        pagination
        onRowClicked={handleRowClick}
        
      />

      </div>
    </div>
  );
};

export default EpicStory;
