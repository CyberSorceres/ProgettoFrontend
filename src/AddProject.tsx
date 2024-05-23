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

interface Project {
  title: string;
  description: string;
}

const AddProjectButton: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const [newProject, setNewProject] = useState<Project>({ title: '', description: '' });
  
    const toggleModal = () => setOpenModal(!openModal);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewProject(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Aggiungi qui la logica per inviare i dati del nuovo progetto al backend
      console.log('Nuovo progetto:', newProject);
      // Chiudi il modal dopo l'invio del form
      setOpenModal(false);
      // Resetta lo stato del form
      setNewProject({ title: '', description: '' });
    };


    return (
      <>
        <button onClick={toggleModal}>Crea Nuovo Progetto</button>
  
        <MDBModal tabIndex='-1' modal open={openModal} centered>
          <MDBModalDialog>
            <MDBModalContent className='dialogContent'>
              <MDBModalHeader>
                <MDBModalTitle>Crea Nuovo Progetto</MDBModalTitle>
                <button type="button" className="btn-close" onClick={toggleModal}></button>
              </MDBModalHeader>
              <MDBModalBody>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titolo</label>
                    <input type="text" className="form-control" id="title" name="title" required   />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descrizione</label>
                    <textarea className="form-control" id="description" name="description" required ></textarea>
                  </div>
                  <MDBRadio name='radioAi' id='ChatGPT' value='ChatGPT' label='ChatGPT' inline />
                  <MDBRadio name='radioAi' id='Bedrock' value='Bedrock' label='Bedrock' inline />
                </form>
              </MDBModalBody>
              <MDBModalFooter>
              <button type="submit" >Crea</button>
                <button onClick={toggleModal}>Annulla</button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
  };

export default AddProjectButton;
