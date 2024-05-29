import React, { useContext, useRef, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRadio,
  MDBInput,
} from 'mdb-react-ui-kit';
import './AddProject.css';
import DropdownMenuContainer from './DropdownMenuContainer';
import { APIContext, api } from './App';
import { Progetto } from 'progettolib';
import BusinessRequest from './BusinessRequest';


const BusinessRequestButton: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
      <>
	    <button onClick={() => {setOpenModal(!openModal)}}>Invia requisiti di business</button>
  
        <MDBModal tabIndex='-1' modal open={openModal} centered>
            <MDBModalDialog>
	    <MDBModalContent className='dialogContent'>
	    <BusinessRequest />
	    </MDBModalContent> 
            </MDBModalDialog>
        </MDBModal>
      </>
    );
  };

export default BusinessRequestButton;
