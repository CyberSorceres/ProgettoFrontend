import React from "react";
import { useNavigate } from 'react-router-dom';

const AddRequestButton: React.FC = () => {
    const navigate = useNavigate();

    const handleClick=()=>{
        navigate('/businessRequest');
    }

    return (
        <div>
            <button className='submit' onClick={handleClick}>Invia Richiesta</button>
        </div>
    );
}

export default AddRequestButton;