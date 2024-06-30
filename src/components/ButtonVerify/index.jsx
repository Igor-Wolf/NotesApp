import React from 'react';
import { ButtonContainer } from './styles.js';

const ButtonVerify = ({ title, variant = "primary", onClick, disabled }) => {
  return (
    <ButtonContainer
      variant={variant}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {title}
    </ButtonContainer>
  );
};

export { ButtonVerify };
