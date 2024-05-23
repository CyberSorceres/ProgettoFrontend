import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Step1: React.FC = () => {

    const[mail, setMail]=useState("");

  return (
    <div>
      <form>
      <label htmlFor="mail" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="mail"
            value={mail}
            name="mail"
            onChange={(event) => setMail(event.target.value)}
            required
          />
      </form>
      <Link to="/login" className="passwordDimenticata">
          Torna a Login
        </Link>
    </div>
  );
};

export default Step1;
