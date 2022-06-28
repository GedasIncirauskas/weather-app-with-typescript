import React = require('react');
import * as S from './Button.styles';

interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  color?: string;
  handleClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ type, color, handleClick, children, disabled }: ButtonProps) => {
  return (
    <S.StyledButton color={color} type={type} onClick={handleClick} disabled={disabled}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
