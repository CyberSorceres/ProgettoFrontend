import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIContext, api } from "./App";
import { Link } from 'react-router-dom';
import "./Login.css";
import Password from "./Password";

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (await api.login(mail, password)) {
      onLogin();
      navigate("/");
    }else{
        setError("Utente non esistente, riprova");
    }
  };

  const handleBlur = () => {
    setError(null);
  };

  return (
    <>
    
    <div className="login">
    <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
        </div>
        <Password password={password} setPassword={setPassword} label={'Password'} onBlur={handleBlur}/>
        {error && <div className="divErrore">{error}</div>}
        <button type="submit" className="btn btn-primary" >
          Accedi
        </button>
      </form>
      <Link to="/registrazione/step1" className="passwordDimenticata">
          Password Dimenticata
        </Link>
    </div>
    </>
  );
};

export default Login;
