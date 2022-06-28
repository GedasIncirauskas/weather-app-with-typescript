import React = require('react');
import * as S from './AccordionItemContent.styles';

interface DropdownProps {
  data: {
    id: number;
    description: string;
  }[];
}

const Dropdown = ({ data }: DropdownProps) => {
  return (
    <S.Dropdown>
      {data.map(({ id, description }) => (
        <S.ElementStyle
          key={id}
          dangerouslySetInnerHTML={{
            __html: description
          }}
        ></S.ElementStyle>
      ))}
    </S.Dropdown>
  );
};

export default Dropdown;
