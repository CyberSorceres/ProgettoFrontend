import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIContext, api } from "./App";
import { Link } from 'react-router-dom';
import "./Login.css";
import Password from "./Password";
import { LoginState } from "progettolib";
import ClipLoader from 'react-spinners/ClipLoader';
import {setIsPm } from './Routes'

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
    try {
      const result = await api.login('pm@gmail.com', password);
	if (result === LoginState.LOGGED_IN) {
	setIsPm(api.role === 1)
	onLogin();
	    localStorage.setItem('token', api.token);
	    localStorage.setItem('role', api.role);
      navigate("/");
    }else if (result === LoginState.MUST_SIGN_UP){
	navigate(`/changePassword/${encodeURI(mail)}`)
    }else{
        setError("Utente non esistente, riprova");
    }
    setLoading(false);
  } catch (e) {
    console.error('Errore durante l\'eliminazione:', e);
    setLoading(false);
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
        <button type="submit" >
          Accedi
        </button>
        {loading && (
                <div className="loading-spinner">
                  <ClipLoader size={50} color={"#123abc"} loading={loading} />
                  <p>Caricamento in corso...</p>
                </div>
              )}
      </form>
      <Link to="/registrazione/step1" className="passwordDimenticata">
          Password Dimenticata
        </Link>
    </div>
    </>
  );
};

export default Login;
