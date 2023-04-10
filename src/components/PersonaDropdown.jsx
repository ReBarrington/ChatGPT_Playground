import React, { useState } from 'react';
import { PersonaDropdownContainer, DropdownItem, StyledSelect } from '../styled-components';

const PersonaDropdown = ({ options, onChange, className }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    onChange(newOption);
  };

  return (
    <PersonaDropdownContainer>
      <StyledSelect value={selectedOption} onChange={handleOptionChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
              {option}
          </option>
        ))}
      </StyledSelect>
    </PersonaDropdownContainer>
  );
}

export default PersonaDropdown;
