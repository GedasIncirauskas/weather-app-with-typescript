import React = require('react');
import { AccordionItemContent } from '../index';
import * as S from './AccordionItem.styles';

interface AccordionItemProps {
  data: {
    id: number;
    title: string;
    about: string;
  }[];
  toggle: (id: number) => void;
  clicked: () => void;
}

const AccordionItem = ({ data, toggle, clicked }: any) => {
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
