import React = require('react');
import * as S from './Tooltip.style';

const Tooltip = ({ children, text, tooltip }: any) => {
  return (
    <S.TooltipContainer>
      {children}
      <S.TooltipText tooltip={tooltip}>{text}</S.TooltipText>
    </S.TooltipContainer>
  );
};

export default Tooltip;
