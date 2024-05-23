import React, { forwardRef } from 'react';

interface DropdownButtonProps {
  onClick: () => void;
}

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(({ onClick }, ref) => {
  return (
    <button onClick={onClick} ref={ref}>Assegna Sviluppatore</button>
  );
});

export default DropdownButton;
