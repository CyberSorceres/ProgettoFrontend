import React, {useState} from 'react';
import BackButton from './BackButton';
import { useNavigate } from 'react-router-dom';


interface Step2Props {
    data: { oldPassword: string, password:string, confirmPassword:string};
    updateData: (data: { oldPassword?: string; password?: string; confirmPassword?: string }) => void;
    onSubmit: () => void;  // Add onSubmit prop
  }

const Step2: React.FC<Step2Props> = ({ data, updateData, onSubmit }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        updateData({ [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
      };

      const navigate = useNavigate();

      const handleClick = () => {
        navigate('/registrazione/step1'); 
      };
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="passwordVecchia" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordVecchia"
              value={data.oldPassword}
              name="passwordVecchia"
              onChange={handleChange}
              required
            />

        <label htmlFor="password" className="form-label">
              Inserisci la nuova password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={data.password}
              name="password"
              onChange={handleChange}
              required
            />

        <label htmlFor="passwordConfirm" className="form-label">
              Conferma la nuova password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirm"
              value={data.confirmPassword}
              name="passwordConfirm"
              onChange={handleChange}
              required
            />
            <button type="submit" className="nextBtn">Invia</button>
            <button type="button" className="nextBtn" onClick={handleClick}>Indietro</button>
        </form>
      </div>
    );
};

export default Step2;
