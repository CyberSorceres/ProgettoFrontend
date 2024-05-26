import React, { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import AddProjectButton from './AddProject';
import { API } from 'progettolib/API'; // Usa l'alias configurato
import './Table.css';

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

const ProjectsTable: React.FC = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const api = new API(); // Crea un'istanza della classe API
        console.log('API instance created'); // Debug
        const loginResult = await api.login('test@gmail.com', 'password'); // Imposta il token (modifica questa parte con la logica di autenticazione)
        if (!loginResult) {
          throw new Error('Login failed');
        }
        console.log('Login successful'); // Debug
        const data = await api.getProgettiOfUser();
        console.log('Projects fetched:', data); // Debug
        const projects = data.map((project) => ({
          id: parseInt(project.id),
          title: project.name,
          client: 'Unknown', // Puoi modificare questa parte in base ai dati reali
          startDate: 'Unknown' // Puoi modificare questa parte in base ai dati reali
        }));
        setRecords(projects);
      } catch (err) {
        console.error('Error fetching projects:', err); // Debug
        setError('Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleRowClick = (project: Project) => {
    navigate(`/project/${project.id}`);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newData = records.filter(row => {
      return row.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='container mt-5 table'>
      <AddProjectButton />
      <div className='textSearch'>
        <input type="text" placeholder="Search" onChange={handleFilter} />
      </div>
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
