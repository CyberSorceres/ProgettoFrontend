import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import AddProjectButton from './AddProject';
import { MDBBtn } from 'mdb-react-ui-kit';

import './BusinessRequest.css';
import BackButton from './BackButton';


const BusinessRequest: React.FC = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Aggiungi qui la logica backend
    };

  return (
    <div className='container mt-5 table'>
        <h3>Requisiti di Business</h3>
        <BackButton/>
        <form onSubmit={handleSubmit}>
          <textarea className="form-control" id="businessRequest" name="businessRequest" placeholder='Inserisci i Requisiti di Business' required ></textarea>
          <div className='divBtn'>
            <MDBBtn type="submit">Invia Requisiti</MDBBtn>
            
          </div>
        </form>
    </div>
  );
};

export default BusinessRequest;
