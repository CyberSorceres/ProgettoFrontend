import React, { useState } from "react";
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
} from "mdb-react-ui-kit";
import "./AddProject.css";
import DropdownMenuContainer from "./DropdownMenuContainer";
import { api } from "./App";
import { useLoaderData } from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';


interface EpicStory {
  descrizione: string;
}

const AddEpicStoryButton: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newEpic, setNewEpic] = useState<EpicStory>({ descrizione: "" });
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEpic((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { id } = useLoaderData() as { id: string };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { id: epicId } = await api.addEpicStory(newEpic as any, id);
      await createUserStoriesFromEpic(api, newEpic.descrizione, id, epicId)
      // Chiudi il modal e resetta lo stato del form
      setLoading(false);
      setOpenModal(false);
      setNewEpic({ descrizione: "" });
      // Ricarica la pagina
      window.location.reload();
    } catch (e) {
      console.error('Errore durante l\'eliminazione:', e);
      setLoading(false);
    }
  };

  return (
    <>
      <MDBBtn onClick={toggleModal}>Crea Nuova Epic Story</MDBBtn>

      <MDBModal tabIndex="-1" modal open={openModal} centered>
        <MDBModalDialog>
          <MDBModalContent className="dialogContent">
            <MDBModalHeader>
              <MDBModalTitle>Crea nuova Epic Story</MDBModalTitle>
              <button
                type="button"
                className="btn-close"
                onClick={toggleModal}
              ></button>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Descrizione
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="descrizione"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
            {loading && (
                <div className="loading-spinner">
                  <ClipLoader size={50} color={"#123abc"} loading={loading} />
                  <p>Caricamento in corso...</p>
                </div>
              )}
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
              >
                Crea
              </button>
              <button onClick={toggleModal}>Annulla</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default AddEpicStoryButton;
