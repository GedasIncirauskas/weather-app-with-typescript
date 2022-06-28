import { css } from 'styled-components';

interface StyleProps {
  showError: boolean;
}

export const label = css`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const display = css`
  display: block;
`;

export const input = css`
  padding: 0.5rem;
  border-radius: var(--x1);
  border: 0.01rem solid var(--dark-grey-color);
  width: 100%;
  box-sizing: border-box;
  color: var(--black-color);
`;

export const inputFocus = css<StyleProps>`
  outline: none;
  border-color: ${props =>
    props.showError ? 'var(--border-error-color)' : 'var(--border-success-color)'};
  background-color: ${props =>
    props.showError ? 'var(--input-bg-error-color)' : 'var(--page-background)'};
`;

export const errorMessage = css`
  color: var(--input-error);
  margin: 0.5rem auto;
`;

export const inputMedia = css`
  padding: 0.25rem;
`;
