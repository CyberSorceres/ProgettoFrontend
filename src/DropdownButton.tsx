import React from 'react';

interface DropdownButtonProps {
  onClick: () => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Apri Menu
    </button>
  );
};

export default DropdownButton;