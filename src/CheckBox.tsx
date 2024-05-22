import React, { useState } from 'react';
import './CheckBox.css';
const CheckBox: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="checkbox-container" >
      <label >
        <input className='label'
         type='checkbox'
          name="options"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Bedrock
      </label>
     
      <label >
        <input className='label'
          type='checkbox'
          name="options"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        ChatGPT
      </label>
    </div>
  );
};

export default CheckBox;