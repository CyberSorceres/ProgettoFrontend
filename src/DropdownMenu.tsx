import React, { useState } from 'react';

import './DropdownMenu.css';

interface DropdownMenuProps {
  options: string[];
  selectedOptions: string[];
  onToggleOption: (option: string) => void;
  onConfirm: () => void;
  onAddOption: (option: string) => void;
  onDeleteOption: (option: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  selectedOptions,
  onToggleOption,
  onConfirm,
  onAddOption,
  onDeleteOption,
}) => {
  const [newOption, setNewOption] = useState('');

  const handleAddOption = () => {
    if (newOption.trim()) {
      onAddOption(newOption.trim());
      setNewOption('');
    }
  };

  return (
    <div className="dropdown-menu">
      {options.map((option) => (
        <div key={option} className="dropdown-item">
          <label>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => onToggleOption(option)}
            />
            {option}
          </label>
          <button onClick={() => onDeleteOption(option)} className="delete-button">x</button>
        </div>
      ))}
      <div className="add-option">
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Aggiungi opzione"
        />
        <button onClick={handleAddOption}>Aggiungi</button>
      </div>
      <button onClick={onConfirm}>Conferma</button>
    </div>
  );
};

export default DropdownMenu;
