import styled from 'styled-components';
import type { TextProps } from './Text.types';
import React from 'react';

const StyledText = styled.text<{ disabled?: boolean; fontStyle?: string }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: ${({ fontStyle }) => {
    switch (fontStyle) {
      case 'sans-serif':
        return 'sans-serif';
      case 'name':
        return 'serif';
      case 'subHeading':
        return 'sans-serif';
    }
  }};
   font-weight: ${({ fontStyle }) => (fontStyle === 'subHeading' ? 'bold' : 'normal')};
   font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case 'small':
        return '18px';
      case 'medium':
        return '36px';
      case 'large':
        return '48px';
      default:
        return '16px';
    }
  }};
`;

const Text = ({ label, disabled, color, fontStyle, fontSize }: TextProps) => {
  return (
    <StyledText disabled={disabled} style={{ color }} fontStyle={fontStyle} fontSize={fontSize}>
      {label}
    </StyledText>
  );
};

export default Text;