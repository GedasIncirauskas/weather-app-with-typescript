import styled from 'styled-components';

interface StyleProps {
  color: string;
}

export const StyledButton = styled.button<StyleProps>`
  background: ${props => `var(--${props.color}-color)`};
  border: none;
  color: var(--text);
  cursor: pointer;
  border-radius: var(--x2);
  padding: var(--x1) var(--x2);
  font-weight: bold;

  &:disabled {
    background-color: var(--dark-grey-color);
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media screen and (max-width: 500px) {
    padding: var(--x2) var(--x3);
    font-size: var(--f2);
    width: 100%;
  }
`;
