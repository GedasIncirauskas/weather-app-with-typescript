import React = require('react');
import * as S from './SearchInput.styles';

const SearchInput = ({ placeholder, value, onChange }: any) => {
  return (
    <>
      <S.InputWrapper>
        <input type="search" placeholder={placeholder} value={value} onChange={onChange} />
      </S.InputWrapper>
    </>
  );
};

export default SearchInput;
