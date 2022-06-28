import styled from 'styled-components';

export const Container = styled.div`
  margin: var(--f10) auto 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: var(--f3);

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Message = styled.p`
  margin: 2rem auto 0 auto;
  text-align: center;
  color: var(--warning-color);
  font-size: var(--f8);
`;

export const ErrorMessage = styled.h2`
  color: var(--warning-color);
  text-align: center;
  font-size: var(--x5);

  @media screen and (max-width: 500px) {
    font-size: var(--x4);
    width: 80%;
    margin: 0 auto;
    line-height: var(--x5);
  }
`;
