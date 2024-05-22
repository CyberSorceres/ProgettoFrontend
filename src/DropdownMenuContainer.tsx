import React, { useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';
import './DropdownMenu.css';

const DropdownContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>(['Opzione 1', 'Opzione 2', 'Opzione 3']);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({ top: rect.bottom, left: rect.left });
    }
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
    <>
      <DropdownButton onClick={toggleMenu} ref={buttonRef} />
      {isOpen &&
        ReactDOM.createPortal(
          <DropdownMenu
            options={options}
            selectedOptions={selectedOptions}
            onToggleOption={toggleOption}
            onConfirm={confirmSelection}
            onAddOption={addOption}
            onDeleteOption={deleteOption}
            position={menuPosition} // Passa la posizione calcolata
          />,
          document.body
        )}
    </>
  );
};

export default DropdownContainer;
