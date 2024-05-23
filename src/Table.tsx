import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import AddProjectButton from './AddProject';
import './index.css';

interface Project {
  id: number;
  title: string;
  client: string;
  startDate: string;
}

const columns: TableColumn<Project>[] = [
  { name: 'Titolo', selector: (row) => row.title, sortable: true },
  { name: 'Cliente', selector: (row) => row.client, sortable: true },
  { name: 'Data di Inizio', selector: (row) => row.startDate, sortable: true },
  { name: 'ID', selector: (row) => row.id.toString(), sortable: true },
];

const projects: Project[] = [
  { id: 1, title: 'ChatGPT vs Bedrock', client: 'Zero12', startDate: '11/05/2024' },
  { id: 2, title: 'Project Alpha', client: 'Client X', startDate: '12/12/2023' },
  // Aggiungi altri progetti qui
];

const ProjectsTable: React.FC = () => {
    const navigate = useNavigate();
    const [records, setRecords] =useState(projects);
  
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
        data={records}
        highlightOnHover
        pagination
        onRowClicked={handleRowClick}
      />
    </div>
  );
};

export default ProjectsTable;
