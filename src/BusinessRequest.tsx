import React, { useState } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import AddProjectButton from './AddProject';
import { MDBBtn } from 'mdb-react-ui-kit';

import './BusinessRequest.css';


const BusinessRequest: React.FC = () => {
    const navigate = useNavigate();
  

  return (
    <div className='container mt-5 table'>
        <h3>Requisiti di Business</h3>
        <textarea className="form-control" id="businessRequest" name="businessRequest" placeholder='Inserisci i Requisiti di Business' required ></textarea>
        <div className='divBtn'>
          <MDBBtn type="submit">Invia Requisiti</MDBBtn>
        </div>
    </div>
  );
};

export default BusinessRequest;
