import React from "react";
import { useNavigate } from 'react-router-dom';

const RejectProject: React.FC = () => {

    const handleClick=()=>{
        //delate business requirement
        //send notification to sender, reject project
    }

    return (
        <div>
            <button className='submit' onClick={handleClick}>Rifiuta Progetto</button>
        </div>
    );
}

export default RejectProject;