import React from 'react';
import DropdownContainer from './DropdownMenuContainer';
import PopupFeedback from './PopupFeedback';
import { isPm } from './Routes';

interface RowDetailsProps {
  data: any;
}

const RowDetails: React.FC<RowDetailsProps> = ({ data }) => {
    console.log(data)
    const handleSplit= () =>{

    };

  return (
    <>
    <div className="row-details">
        <p><strong>Descrizione:</strong> {data.description}</p>
        <div className='block'>
            <DropdownContainer />
            <div className="feedback">
                <PopupFeedback />
            </div>
        </div>
    </div>
    </>
  );
};

export default RowDetails;
