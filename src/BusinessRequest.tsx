import React, { useRef, useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useLoaderData, useNavigate } from 'react-router-dom';
import AddProjectButton from './AddProject';
import { MDBBtn } from 'mdb-react-ui-kit';

import './BusinessRequest.css';
import BackButton from './BackButton';
import { api } from './App';


const BusinessRequest: React.FC = () => {
    const input = useRef(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
	const reqs = input.current.value;
	await api.sendBusinessRequirementsToAI(reqs)
    };

  return (
    <div className='container mt-5 table'>
        <h3>Requisiti di Business</h3>
        <form onSubmit={handleSubmit}>
	  <textarea ref={input} className="form-control" id="businessRequest" name="businessRequest" placeholder='Inserisci i Requisiti di Business' required ></textarea>
          <div className='divBtn'>
	  <button className="submit" type="submit" onClick={handleSubmit}>Invia Requisiti</button>
          </div>
        </form>
    </div>
  );
};

export default BusinessRequest;
