import React from "react";
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
  } from 'mdb-react-ui-kit';
  


  const BackButton: React.FC = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Torna alla pagina precedente
      };
    return (
      <div>
        <MDBBtn color='primary' onClick={handleGoBack}>Torna Indietro</MDBBtn>
      </div>
    );
  };
  
  export default BackButton;