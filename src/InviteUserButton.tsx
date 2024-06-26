import React, { useRef, useState } from "react";
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
  description: string;
}

const InviteUserButton: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newEpic, setNewEpic] = useState<EpicStory>({ description: "" });

  const toggleModal = () => setOpenModal(!openModal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEpic((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
    const { id } = useLoaderData() as { id: string };
    const option = useRef(null)
    const email = useRef(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      const invite = await api.invite(id, email.current.value,  option.current.value === 'user' ? 3 : 1)
    setOpenModal(false);
  };

  return (
    <>
      <MDBBtn onClick={toggleModal}>Invita</MDBBtn>

      <MDBModal tabIndex="-1" modal open={openModal} centered>
        <MDBModalDialog>
          <MDBModalContent className="dialogContent">
            <MDBModalHeader>
              <MDBModalTitle>Invita utente</MDBModalTitle>
              <button
                type="button"
                className="btn-close"
                onClick={toggleModal}
              ></button>
            </MDBModalHeader>
          <MDBModalBody>
	  <label htmlFor="email">Email</label>
	  <input type="text" onChange={handleChange} className="form-control" id="email" name="email" ref={email} required />
	  {' '}
      <br />
	  <label htmlFor="role">Ruolo</label>
          <select ref={option} id="role">
	    <option value="user">Cliente</option>
	  <option value="dev">Sviluppatore</option>
	  </select>
            </MDBModalBody>
            <MDBModalFooter>
              <button
                onClick={handleSubmit}
                type="submit"              
                >
                Invia
              </button>
              <button onClick={toggleModal}>Annulla</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default InviteUserButton;
