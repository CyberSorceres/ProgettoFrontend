import React, { useState, useEffect } from 'react';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';

import './DropdownMenu.css';

const DropdownContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    fetchOptions();
  }, []);

  //recupero sviluppatori collegati al progetto
  const fetchOptions = async () => {
    try {
      const response = await fetch('https://api-endpoint.com/options');
      const data = await response.json();
      setOptions(data.options);
    } catch (error) {
      console.error('Errore nel recuperare le opzioni:', error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = (option: string) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter((opt) => opt !== option)
        : [...prevSelectedOptions, option]
    );
  };

  const confirmSelection = () => {
    console.log('Opzioni selezionate:', selectedOptions);
    setIsOpen(false);
  };

  //aggiunta sviluppatori
  const addOption = async (newOption: string) => {
    try {
      const response = await fetch('https://api-endpoint.com/options', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ option: newOption }),
      });
      const data = await response.json();
      setOptions((prevOptions) => [...prevOptions, data.option]);
    } catch (error) {
      console.error('Errore nell\'aggiungere l\'opzione:', error);
    }
  };

  //cancellazione sviluppatori
  const deleteOption = async (optionToDelete: string) => {
    try {
      await fetch(`https://api-endpoint.com/options/${optionToDelete}`, {
        method: 'DELETE',
      });
      setOptions((prevOptions) => prevOptions.filter((option) => option !== optionToDelete));
      setSelectedOptions((prevSelectedOptions) => 
        prevSelectedOptions.filter((option) => option !== optionToDelete)
      );
    } catch (error) {
      console.error('Errore nel cancellare l\'opzione:', error);
    }
  };

  return (
    <div className="dropdown-container">
      <DropdownButton onClick={toggleMenu} />
      {isOpen && (
        <DropdownMenu
          options={options}
          selectedOptions={selectedOptions}
          onToggleOption={toggleOption}
          onConfirm={confirmSelection}
          onAddOption={addOption}
          onDeleteOption={deleteOption}
        />
      )}
    </div>
  );
};

export default DropdownContainer;
