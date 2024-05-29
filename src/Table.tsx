import React, { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import AddProjectButton from './AddProject';
import './Table.css';
import { Progetto as Project } from 'progettolib';
import ClipLoader from 'react-spinners/ClipLoader';
import { useLoading } from './LoadingContext';

const columns: TableColumn<Project>[] = [
  { name: 'Titolo', selector: (row) => row.name, sortable: true },
  { name: 'Cliente', selector: (row) => row.name, sortable: true },
  { name: 'Data di Inizio', selector: (row) => row.name, sortable: true },
  {
    name: 'Progress',
    selector: (row) => row.progress || 0.5,
    cell: (row) => (
      <progress className="progress-epic-story" value={row.progress} max="100" />
    ),
  },
];

const ProjectsTable: React.FC = () => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const projects = useLoaderData() as Project[];
    const [records, setRecords] = useState(projects);
    const { isLoading, setLoading } = useLoading();

    useEffect(() => {
      if (navigation.state === 'loading') {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }, [navigation.state, setLoading]);
  

    if (!projects) {
	return <>Loading...</>
    }
  
    const handleRowClick = (project: Project) => {
      navigate(`/project/${project.id}`);
  };


    function handleFilter(event: React.ChangeEvent<HTMLInputElement>): void {
        const newData = projects.filter(row => {
          return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
      }

  return (
    <div className='container mt-5 table'>
        <AddProjectButton/>
        <div className='textSearch'><input type="text" placeholder="Search" onChange={handleFilter}/></div>
        {isLoading && (
        <div className="loading-spinner">
          <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
          <p>Caricamento in corso...</p>
        </div>
      )}
      <DataTable
        columns={columns}
        data={records}
        highlightOnHover
        pagination
        onRowClicked={handleRowClick}
      />
    </div>
  );
};

export default ProjectsTable;
