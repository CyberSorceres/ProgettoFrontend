import React from "react";

const Logout: React.FC = () => {

    const handleClick=()=>{
        localStorage.removeItem('token');
    }

    return (
        <div>
            <button className='submit' onClick={handleClick}>Logout</button>
        </div>
    );
}

export default Logout;