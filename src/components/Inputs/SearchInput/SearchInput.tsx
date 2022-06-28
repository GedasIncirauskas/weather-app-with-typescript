import { SearchInputProps } from '../../../ts/interfaces';
import * as S from './SearchInput.styles';

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <>
      <S.InputWrapper>
        <input type="search" placeholder={placeholder} value={value} onChange={onChange} />
      </S.InputWrapper>
    </>
  );
};

export default SearchInput;
