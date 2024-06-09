import React, { forwardRef } from 'react';
import { isPm } from './Routes';

interface DropdownButtonProps {
  onClick: () => void;
}

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(({ onClick }, ref) => {
	return (<>
		{isPm && < button onClick={onClick} ref={ref} > Assegna Sviluppatore</button >}
	    </>
  );
});

export default DropdownButton;
