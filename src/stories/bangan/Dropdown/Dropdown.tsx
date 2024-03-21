import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

interface DropdownProps {
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
  disable: boolean;
}

const StyledDropdown = styled.select<{ backgroundColor: string, fontColor: string, borderColor: string, disable: boolean}>`
  /* Add your Dropdown styles here */
  background-color: ${(props) => props.backgroundColor}; /* Fixed: backgroundColor was not interpolated */
  color: ${(props) => props.fontColor};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')}; 
  border: 2px solid ${(props) => props.borderColor};
`;

const StyledOption = styled.option<{ backgroundColor: string, fontColor: string, borderColor: string}>`
  /* Add your Dropdown styles here */
  background-color: ${(props) => props.backgroundColor}; /* Fixed: backgroundColor was not interpolated */
  color: ${(props) => props.fontColor};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${(props) => props.borderColor};
`;

const Dropdown: React.FC<DropdownProps> = ({ backgroundColor, fontColor, borderColor, disable }) => { 
  return (
    <StyledDropdown disable={disable} disabled = {disable} backgroundColor={backgroundColor} fontColor={fontColor} borderColor={borderColor}> 
      <StyledOption backgroundColor={backgroundColor} fontColor={fontColor} borderColor={borderColor}>
        Option 1
      </StyledOption>
      <StyledOption backgroundColor={backgroundColor} fontColor={fontColor} borderColor={borderColor}>
        Option 2
      </StyledOption>
      <StyledOption backgroundColor={backgroundColor} fontColor={fontColor} borderColor={borderColor}>
        Option 3
      </StyledOption>
      <StyledOption backgroundColor={backgroundColor} fontColor={fontColor} borderColor={borderColor}>
        Option 4
      </StyledOption>
      <StyledOption backgroundColor={backgroundColor} fontColor={fontColor} borderColor={borderColor}>
        Option 5
      </StyledOption>
    </StyledDropdown>
  );
};

Dropdown.propTypes = { 
  backgroundColor: PropTypes.string.isRequired, 
  fontColor: PropTypes.string.isRequired,
};

export default Dropdown;
