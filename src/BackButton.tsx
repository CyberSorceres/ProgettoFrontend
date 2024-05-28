import React from "react";
import { useNavigate } from 'react-router-dom';
import { useLoading } from './LoadingContext';

import "./index.css";
import ClipLoader from 'react-spinners/ClipLoader';

  const BackButton: React.FC = () => {
    const navigate = useNavigate();
    const { setLoading } = useLoading();

    const handleGoBack = () => {
      setLoading(true);
        navigate(-1); // Torna alla pagina precedente
      };
    return (
      <div className="backButton">
        <button  color='primary' onClick={handleGoBack}>Torna Indietro</button>
      </div>
    );
  };
  
  export default BackButton;