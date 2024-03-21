import React from "react";
import type { DropdownProps } from "./DanielDropdown.types";
import styled from "styled-components";

const StyledDropdown = styled.select`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 2px;
  border: 2px solid #138DDF;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/**
 * A customizable dropdown component
 */
export const DanielDropdown = ({
  backgroundColor,
  children,
  disabled = false,
  ...props
}: DropdownProps) => {
  return (
    <StyledDropdown
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
      data-testid="DanielDropdown"
    >
      {children}
    </StyledDropdown>
  );
};
