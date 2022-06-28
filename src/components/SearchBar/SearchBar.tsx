import React = require('react');
import * as S from './SearchBar.styles';

const SearchBar = ({ results, onClick }: any) => {
  return (
    <S.ResultWrapper>
      {results.map((result: any) => (
        <S.ResultItems key={result.id} onClick={() => onClick(result)}>
          <span>{`${result.name}, ${result.country}`}</span>
        </S.ResultItems>
      ))}
    </S.ResultWrapper>
  );
};

export default SearchBar;
