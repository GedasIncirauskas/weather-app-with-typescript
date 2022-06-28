import { AccordionProps } from '../../ts/interfaces';
import { useState } from 'react';
import { AccordionItem, Spinner } from '../index';
import * as S from './Accordion.styles';

const Accordion: React.FC<AccordionProps> = ({ data }) => {
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
