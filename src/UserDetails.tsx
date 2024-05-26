import React from 'react';
import DropdownContainer from './DropdownMenuContainer';
import PopupFeedback from './PopupFeedback';

interface RowDetailsProps {
  data: any;
}

const RowDetails: React.FC<RowDetailsProps> = ({ data }) => {

    const handleSplit= () =>{

    };

  return (
    <>
    <button onClick={handleSplit} className='buttonDividi'>Dividi</button>

    <div className="row-details">
        <p><strong>Descrizione:</strong> {data.desc}</p>
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
