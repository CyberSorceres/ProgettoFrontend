import React from 'react';

interface projectDetailsProps {
    message: string;
}

const projectDetails: React.FC<projectDetailsProps> = ({ message }) => {
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default projectDetails;