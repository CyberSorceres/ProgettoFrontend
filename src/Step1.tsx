import React, {useState} from 'react';


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
    </div>
  );
};

export default Step1;
