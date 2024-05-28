import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../../src/Table';

describe('Table', () => {
  it('renders a table with the correct columns', () => {
    render(<Table />);
    const table = screen.getByRole('table');
    const columns = screen.getAllByRole('columnheader');
    expect(table).toBeInTheDocument();
    expect(columns).toHaveLength(3);
    expect(columns[0]).toHaveTextContent('Title');
    expect(columns[1]).toHaveTextContent('Description');
    expect(columns[2]).toHaveTextContent('Status');
  });

  it('renders a row for each project', () => {
    const projects = [
      { id: 1, title: 'Project 1', description: 'Description 1', status: 'In Progress' },
      { id: 2, title: 'Project 2', description: 'Description 2', status: 'Completed' },
    ];
    render(<Table projects={projects} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(projects.length + 1); // +1 for the header row
    expect(rows[1]).toHaveTextContent('Project 1');
    expect(rows[2]).toHaveTextContent('Description 1');
    expect(rows[3]).toHaveTextContent('In Progress');
    expect(rows[4]).toHaveTextContent('Project 2');
    expect(rows[5]).toHaveTextContent('Description 2');
    expect(rows[6]).toHaveTextContent('Completed');
  });

  it('renders a button to add a new project', () => {
    render(<Table />);
    const button = screen.getByRole('button', { name: 'Add Project' });
    expect(button).toBeInTheDocument();
  });

  it('calls the handleAddProject function when the button is clicked', () => {
    const mockHandleAddProject = jest.fn();//FIXME
    render(<Table handleAddProject={mockHandleAddProject} />);
    const button = screen.getByRole('button', { name: 'Add Project' });
    fireEvent.click(button);
    expect(mockHandleAddProject).toHaveBeenCalled();
  });
});