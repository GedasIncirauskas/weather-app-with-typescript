import { TooltipProps } from '../../ts/interfaces';
import * as S from './Tooltip.style';

const Tooltip: React.FC<TooltipProps> = ({ children, text, tooltip }) => {
  return (
    <S.TooltipContainer>
      {children}
      <S.TooltipText tooltip={tooltip}>{text}</S.TooltipText>
    </S.TooltipContainer>
  );
};

export default Tooltip;
