import React, {useState} from 'react';

const Step2: React.FC = () => {
    const[passwordVecchia, setPasswordvecchia]=useState("");
    const [password, setPassword]=useState("");
    const [passwordConfirm, setPasswordConfirm]=useState("");

    return (
      <div>
        <form>
        <label htmlFor="passwordVecchia" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordVecchia"
              value={passwordVecchia}
              name="passwordVecchia"
              onChange={(event) => setPasswordvecchia(event.target.value)}
              required
            />

        <label htmlFor="password" className="form-label">
              Inserisci la nuova password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />

        <label htmlFor="passwordConfirm" className="form-label">
              Conferma la nuova password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirm"
              value={passwordConfirm}
              name="passwordConfirm"
              onChange={(event) => setPasswordConfirm(event.target.value)}
              required
            />
        </form>
      </div>
    );
};

export default Step2;
