import React, { useState } from 'react';
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

interface EpicStory {
  description: string;

}

const AddEpicStoryButton: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const [newEpic, setNewEpic] = useState<EpicStory>({ description: '' });
  
    const toggleModal = () => setOpenModal(!openModal);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewEpic(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Aggiungi qui la logica per inviare i dati del nuovo progetto al backend
      console.log('Nuova Epic Story:', newEpic);
      // Chiudi il modal dopo l'invio del form
      setOpenModal(false);
      // Resetta lo stato del form
      setNewEpic({ description: '' });
    };


    return (
      <>
        <MDBBtn onClick={toggleModal}>Crea Nuova Epic Story</MDBBtn>
  
        <MDBModal tabIndex='-1' modal open={openModal} centered>
          <MDBModalDialog>
            <MDBModalContent className='dialogContent'>
              <MDBModalHeader>
                <MDBModalTitle>Crea nuova Epic Story</MDBModalTitle>
                <button type="button" className="btn-close" onClick={toggleModal}></button>
              </MDBModalHeader>
              <MDBModalBody>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descrizione</label>
                    <textarea className="form-control" id="description" name="description" required ></textarea>
                  </div>
                  
                </form>
              </MDBModalBody>
              <MDBModalFooter>
              <button type="submit" className="btn btn-primary">Crea</button>
                <button onClick={toggleModal}>Annulla</button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
  };

export default AddEpicStoryButton;
