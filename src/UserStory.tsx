import React, { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Table.css';
import BackButton from './BackButton';
import PopupFeedback from './PopupFeedback';
import DropdownContainer from './DropdownMenuContainer';
import { fakeData } from './fakeData.ts';
import './UserStory.css';

interface UserStoryProp {
  id: number;
  name: string;
  desc: string;
  progress: number;
}

interface EpicStoryProp {
  id: number;
  name: string;
  desc: string;
  progress: number;
  userStoryArray: UserStoryProp[];
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
  {
    name: 'Selezione dev',
    cell: (row: UserStoryProp) => (
      <DropdownContainer />
    ),
  },
  {
    name: 'Feedback',
    cell: (row: UserStoryProp) => (
      <PopupFeedback />
    ),
  },
  {
    name: 'Dettagli',
    cell: (row: UserStoryProp) => (
      <button onClick={() => handleButtonClick(row)}>Vedi Dettagli</button>
    ),
  },
];

const handleButtonClick = (row: UserStoryProp, navigate) => {
  navigate(`/userstory/${row.id}`);
};

const UserStory: React.FC<EpicStoryProps> = ({ epicStory }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [records, setRecords] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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
  }

  return (
    <div>
      <div className="UserStoryDiv">
        <BackButton />
        <div className='textSearch'>
          <input type="text" placeholder="Search" onChange={handleFilter} />
        </div>
        <DataTable
          columns={columns.map((col) => {
            if (col.name === 'Dettagli') {
              return {
                ...col,
                cell: (row) => (
                  <button onClick={() => handleButtonClick(row, navigate)}>Vedi Dettagli</button>
                ),
              };
            }
            return col;
          })}
          data={records}
          pagination
        />
      </div>
    </div>
  );
};

export default UserStory;
