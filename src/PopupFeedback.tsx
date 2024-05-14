import React, {useState} from 'react';
import './PopupFeedback.css';

const PopupFeedback: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        closeAllPopups();
        setIsOpen(true);
    };

    const handleCloseButtonClick = () => {
        setIsOpen(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const closeAllPopups = () => {
        const popups = document.querySelectorAll('.popup');
        popups.forEach((popup) => {
            (popup as HTMLElement).style.display = 'none';
        });
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Apri Popup</button>
            {isOpen && (
                <div className="popup">
                    <h2>Titolo del Popup</h2>
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleCloseButtonClick}>Chiudi</button>
                </div>
            )}
        </div>
    );
};

export default PopupFeedback;