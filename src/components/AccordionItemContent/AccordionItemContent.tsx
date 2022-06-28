import { DropdownProps } from '../../ts/interfaces';
import * as S from './AccordionItemContent.styles';

const Dropdown: React.FC<DropdownProps> = ({ data }) => {
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
