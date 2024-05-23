import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PopupFeedback: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Invia feedback</button>
      {isOpen && ReactDOM.createPortal(
        <div className="popup">
          <h2>Titolo del Popup</h2>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button className="close-popup" onClick={handleCloseButtonClick}>Chiudi</button>
        </div>,
        document.body
      )}
    </div>
  );
};

export default PopupFeedback;
