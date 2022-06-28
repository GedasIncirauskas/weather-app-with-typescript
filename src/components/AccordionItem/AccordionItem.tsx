import { AccordionItemContent } from '../index';
import * as S from './AccordionItem.styles';

interface AccordionItemProps {
  data: {
    id: number;
    title: string;
    about: { id: number; description: string }[];
  }[];
  toggle?: (id: number) => void;
  clicked?: () => void;
}

const AccordionItem: React.FC<any> = ({ data, toggle, clicked }) => {
  const { id, title, about } = data;
  const isClicked = clicked === id;

  return (
    <>
      <S.Wrap onClick={() => toggle(id)}>
        <S.Element>{id}</S.Element>
        <h2>{title}</h2>
        <S.BorderLine active={isClicked} />
      </S.Wrap>
      {isClicked && <AccordionItemContent data={about} />}
    </>
  );
};

export default AccordionItem;
