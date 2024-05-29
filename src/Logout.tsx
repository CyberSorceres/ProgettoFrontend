import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const navigate = useNavigate();

    const handleClick=()=>{
        localStorage.removeItem('token');
        navigate("./login");
    }

    return (
        <div>
            <button className='logout' onClick={handleClick}><FontAwesomeIcon icon={faSignOutAlt} /></button>
        </div>
    );
}

export default Logout;