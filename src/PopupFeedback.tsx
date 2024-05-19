import React, { useState } from 'react';
import './PopupFeedback.css';

interface PopupFeedbackProps {
    description: string;
}

const PopupFeedback: React.FC<PopupFeedbackProps> = ({ description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const handleSubmitFeedback = async () => {
        try {
            const response = await fetch('/api/feedback', { // Da inserire l'endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ feedback: inputValue, description: description }), // Invia anche la descrizione
            });

            if (response.ok) {
                setIsSubmitted(true); // Imposta lo stato di conferma su vero
                setIsOpen(false); // Chiudi il popup dopo l'invio
            } else {
                console.error('Errore durante invio del feedback');
            }
        } catch (error) {
            console.error('Errore:', error);
        }
    };

    return (
        <div>
            {!isSubmitted ? ( // Controlla lo stato di conferma
                <button onClick={handleButtonClick}>Invia feedback</button>
            ) : (
                <span>Grazie per il tuo feedback!</span>
            )}
            {isOpen && (
                <div className="popup">
                    <h2>Titolo del Popup</h2>
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleSubmitFeedback}>Invia</button>
                    <button className="close-popup" onClick={handleCloseButtonClick}>Chiudi</button>
                </div>
            )}
        </div>
    );
};

export default PopupFeedback;
