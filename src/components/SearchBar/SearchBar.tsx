import { SearchBarProps } from '../../ts/interfaces';
import * as S from './SearchBar.styles';

const SearchBar: React.FC<SearchBarProps> = ({ results, onClick }) => {
  return (
    <S.ResultWrapper>
      {results.map(result => (
        <S.ResultItems key={result.id} onClick={() => onClick(result)}>
          <span>{`${result.name}, ${result.country}`}</span>
        </S.ResultItems>
      ))}
    </S.ResultWrapper>
  );
};

export default SearchBar;
