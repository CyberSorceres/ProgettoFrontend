import React from 'react';
import DropdownContainer from './DropdownMenuContainer';
import PopupFeedback from './PopupFeedback';

interface RowDetailsProps {
  data: any;
}

const RowDetails: React.FC<RowDetailsProps> = ({ data }) => {
  return (
    <div className="row-details">
      <p><strong>Descrizione:</strong> {data.desc}</p>
      <div className="actions">
        <DropdownContainer />
        <PopupFeedback />
      </div>
    </div>
  );
};

export default RowDetails;
