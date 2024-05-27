import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AddProjectButton from './AddProject';
import './Table.css';
import { Progetto as Project } from 'progettolib';

const columns: TableColumn<Project>[] = [
  { name: 'Titolo', selector: (row) => row.name, sortable: true },
  { name: 'Cliente', selector: (row) => row.name, sortable: true },
  { name: 'Data di Inizio', selector: (row) => row.name, sortable: true },
  { name: 'ID', selector: (row) => row.id.toString(), sortable: true },
];

const ProjectsTable: React.FC = () => {
    const navigate = useNavigate();
    const projects = useLoaderData() as Project[];
    const [records, setRecords] = useState(projects);
    if (!projects) {
	return <>Loading...</>
    }
  
    const handleRowClick = (project: Project) => {
      navigate(`/project/${project.id}`);
    };

    function handleFilter(event: React.ChangeEvent<HTMLInputElement>): void {
        const newData = projects.filter(row => {
          return row.title.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
      }

  return (
    <div className='container mt-5 table'>
        <AddProjectButton/>
        <div className='textSearch'><input type="text" placeholder="Search" onChange={handleFilter}/></div>
      <DataTable
        columns={columns}
        data={projects}
        highlightOnHover
        pagination
        onRowClicked={handleRowClick}
      />
    </div>
  );
};

export default ProjectsTable;
