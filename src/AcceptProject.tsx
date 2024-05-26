import React from "react";
import { useNavigate } from 'react-router-dom';

const RejectProject: React.FC = () => {

    const handleClick=()=>{
        //crea nuovo progetto
        //send notification to sender, reject project
    }

    return (
        <div>
            <button className='submit' onClick={handleClick}>Accetta Progetto</button>
        </div>
    );
}

export default RejectProject;