import React, { useState } from 'react';
import ReactDOM from 'react-dom';
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
import './PopupFeedback.css';

const PopupFeedback: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   //invio commento
  };

  return (
   <> 
  <button onClick={toggleModal}>Feedback</button>
  
  <MDBModal tabIndex='-1' modal open={openModal} centered>
    <MDBModalDialog>
      <MDBModalContent className='dialogContent'>
        <MDBModalHeader>
          <MDBModalTitle>Feedback</MDBModalTitle>
          <button type="button" className="btn-close" onClick={toggleModal}></button>
        </MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">Inserisci il tuo feedback per aiutarci a migliorare l'AI</label>
              <textarea className="form-control" id="feedback" name="feedback" required ></textarea>
            </div>
            <button type="submit" >Invia</button>
              <button onClick={toggleModal}>Annulla</button>
          </form>
        </MDBModalBody>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>
  </>
  );
};

export default PopupFeedback;
