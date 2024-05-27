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
import { APIContext, api } from './App';
import { Progetto } from 'progettolib';
import DropdownMenuContainer from './DropdownMenuContainer';

const AddProjectButton: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const [newProject, setNewProject] = useState<any>({});
    const bedrockRef = useRef(undefined)
  
    const toggleModal = () => setOpenModal(!openModal);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewProject(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };

    const [chatGPT, setChatGPT] = useState(false)

    const getApi = useContext(APIContext)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	console.log(newProject)
	e.preventDefault();
	// Aggiungi qui la logica per inviare i dati del nuovo progetto al backend
	await api.addProject({
	    ...newProject,
	    ai: bedrockRef.current.value === 'on' ? 'bedrock' : 'chatgpt'
	} as Progetto)
      console.log('Nuovo progetto:', newProject);
      // Chiudi il modal dopo l'invio del form
      setOpenModal(false);
      // Resetta lo stato del form
      setNewProject({ title: '', description: '' });
      window.location.reload();
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
	    <input type="text" onChange={handleChange} className="form-control" id="title" name="name" required   />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descrizione</label>
									<textarea className="form-control" onChange={handleChange} id="description" name="description" required ></textarea>
                  </div>
	    <MDBRadio name='radioAi' id='ChatGPT' label='ChatGPT' inline />
	    <MDBRadio inputRef={bedrockRef} name='radioAi' id='Bedrock' label='Bedrock' inline />
                </form>
              </MDBModalBody>
              <MDBModalFooter>
							<button type="submit" onClick={handleSubmit} className="btn btn-primary">Crea</button>
                <MDBBtn onClick={toggleModal}>Annulla</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
  };

export default AddProjectButton;
