import React = require('react');
import { useState } from 'react';
import { AccordionItem, Spinner } from '../index';
import * as S from './Accordion.styles';

interface AccordionProps {
  data: {
    id: number;
    title: string;
    about: {
      id: number;
      description: string;
    }[];
  }[];
}

const Accordion = ({ data }: AccordionProps) => {
  const [clicked, setClicked] = useState<number | null>(null);

  const toggle = (id: number) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  if (!data) return <Spinner />;

  return (
    <S.Container>
      {data.map(item => (
        <AccordionItem data={item} toggle={toggle} clicked={clicked} key={item.id} />
      ))}
    </S.Container>
  );
};

export default Accordion;
