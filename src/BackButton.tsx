import React from "react";
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn
  } from 'mdb-react-ui-kit';
import "./index.css";


  const BackButton: React.FC = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Torna alla pagina precedente
      };
    return (
      <div className="backButton">
        <button  color='primary' onClick={handleGoBack}>Torna Indietro</button>
      </div>
    );
  };
  
  export default BackButton;