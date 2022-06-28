import React = require('react');
import * as S from './TextArea.styles';

const Textarea = ({
  labelName,
  labelTitle,
  value,
  onChange,
  onBlur,
  isError,
  errorMessage
}: any) => {
  return (
    <S.TextareaWrapper showError={isError}>
      <label htmlFor={labelName}>{labelTitle}</label>
      <textarea id={labelName} value={value} onChange={onChange} onBlur={onBlur}></textarea>
      {isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.TextareaWrapper>
  );
};

export default Textarea;
