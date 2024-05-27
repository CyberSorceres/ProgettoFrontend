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

interface EpicStory {
  descrizione: string;
}

const AddEpicStoryButton: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newEpic, setNewEpic] = useState<EpicStory>({ descrizione: "" });

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
      const { id: epicId } = await api.addEpicStory(newEpic as any, id);
      const response = await api.bedrock(newEpic.descrizione)
      const { userStories } = JSON.parse(response.content[0].text.replace('```json', '').replace('```', ''))
      for (const user of userStories) {
	  await api.addUserStrory({tag: (Math.floor(Math.random() * 1000)).toString(), description: user.description}, id, epicId);
      }
    // Chiudi il modal dopo l'invio del form
    setOpenModal(false);
    // Resetta lo stato del form
    setNewEpic({ descrizione: "" });
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
