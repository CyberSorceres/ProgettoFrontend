import React, { useState } from 'react';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';

import './DropdownMenu.css';

const DropdownContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>(['Opzione 1', 'Opzione 2', 'Opzione 3']);

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

  const addOption = (newOption: string) => {
    setOptions((prevOptions) => [...prevOptions, newOption]);
  };

  const deleteOption = (optionToDelete: string) => {
    setOptions((prevOptions) => prevOptions.filter((option) => option !== optionToDelete));
    setSelectedOptions((prevSelectedOptions) => 
      prevSelectedOptions.filter((option) => option !== optionToDelete)
    );
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
