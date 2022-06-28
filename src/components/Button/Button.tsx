import { ButtonProps } from '../../ts/interfaces';
import * as S from './Button.styles';

const Button: React.FC<ButtonProps> = ({ type, color, handleClick, children, disabled }) => {
  return (
    <S.StyledButton color={color} type={type} onClick={handleClick} disabled={disabled}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
