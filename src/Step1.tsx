import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface Step1Props {
  data: { email: string };
  updateData: (data: { email: string }) => void;
  onSubmit: () => void;  // Add onSubmit prop
}

const Step1: React.FC<Step1Props> = ({ data, updateData, onSubmit }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateData({ email: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login'); 
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mail" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="mail"
          value={data.email}
          name="mail"
          onChange={handleChange}
          required
        />
        <button type="submit" className="nextBtn">Successivo</button>
        <button type="button" className="nextBtn" onClick={handleClick}>Indietro</button>

      </form>
    </div>
  );
};

export default Step1;
