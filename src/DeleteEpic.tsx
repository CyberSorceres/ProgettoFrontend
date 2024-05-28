import React, {useState} from "react";
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

  interface EpicStoryProp {
    id: number,
    name: string;
    desc: string;
    progress: number;
    userStoryArray: UserStoryProp[];
  }
  interface UserStoryProp {
    id: number;
    name: string;
    desc: string;
    progress: number;
  }
  interface DeleteEpicProps {
    epic: EpicStoryProp;
}

const DeleteEpic: React.FC<DeleteEpicProps> = ({ epic }) => {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => setOpenModal(!openModal);

    const handleClick=()=>{
        
        //elimina epic story
    }

    return (
        <>
        <div>
            <button  className='trash-btn' onClick={toggleModal}> <i className="fas fa-trash"></i></button>
        </div>
        <MDBModal tabIndex='-1' modal open={openModal} centered>
        <MDBModalDialog>
          <MDBModalContent className='dialogContent'>
            <MDBModalHeader>
                <h3>Elimina</h3>
              <button type="button" className="btn-close" onClick={toggleModal}></button>
            </MDBModalHeader>
            <MDBModalBody>
                <p>Sei sicuro di voler eliminare la Epic Story <b>{epic.id} {epic.name}</b>.</p>
                <p>Facendo cosi' eliminerai anche tutte le User Story collegate</p>
            </MDBModalBody>
            <MDBModalFooter>
                <button  onClick={handleClick}>Elimina</button>
                <button onClick={toggleModal}>Annulla</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </>
    );
}

export default DeleteEpic;