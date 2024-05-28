import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Logout: React.FC = () => {

    const handleClick=()=>{
        localStorage.removeItem('token');
    }

    return (
        <div>
            <button className='logout' onClick={handleClick}><FontAwesomeIcon icon={faSignOutAlt} /></button>
        </div>
    );
}

export default Logout;