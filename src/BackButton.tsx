import React from "react";
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn
  } from 'mdb-react-ui-kit';
  
import './BackButton.css'

  const BackButton: React.FC = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Torna alla pagina precedente
      };
    return (
      <div>
        <MDBBtn className='btnBack'  onClick={handleGoBack}>Torna Indietro</MDBBtn>
      </div>
    );
  };
  
  export default BackButton;