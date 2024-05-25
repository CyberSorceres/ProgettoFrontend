import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate, useParams } from 'react-router-dom';
import './Table.css';
import BackButton from './BackButton';
import UserStory from './UserStory';
import PopupFeedback from './PopupFeedback';
import DropdownContainer from './DropdownMenuContainer';
import './EpicStory.css';
import AddEpicStoryButton from './AddEpicStory';

interface EpicStoryProp {
  id: number;
  name: string;
  desc: string;
  progress: number;
  userStoryArray: UserStoryProp[];
}

interface UserStoryProp {
  id: number;
  name: string;
  desc: string;
  progress: number;
}

interface EpicStoryProps {
  epicStory: EpicStoryProp;
}

const columns: TableColumn<EpicStoryProp>[] = [
  {
    name: 'Tag',
    selector: (row: EpicStoryProp) => row.id,
    cell: (row: EpicStoryProp) => <span>{row.id}</span>,
    width:'10%',
    sortable: true,
  },
  {
    name: 'Name',
    selector: (row: EpicStoryProp) => row.name,
    cell: (row: EpicStoryProp) => <span>{row.name}</span>,
    sortable: true,

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
  /*{
    name: 'Actions',
    cell: (row: EpicStoryProp) => <DropdownContainer />,
  },*/
];

const EpicStory: React.FC<EpicStoryProps> = ({ epicStory }) => {
  const { id } = useParams<{ id: string }>();
  const fakeData: EpicStoryProp[] = [
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
    navigate(`userstory/${fakeData.id}`);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newData = fakeData.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  };

  return (
    <div>
      <div className="EpicStoryDiv">
        
        <AddEpicStoryButton></AddEpicStoryButton>

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
