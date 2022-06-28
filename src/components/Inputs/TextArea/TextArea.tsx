import { InputProps } from '../../../ts/interfaces';
import * as S from './TextArea.styles';

const Textarea: React.FC<InputProps> = ({
  isError,
  labelName,
  labelTitle,
  value,
  onChange,
  onBlur,
  errorMessage
}) => {
  return (
    <S.TextareaWrapper showError={isError}>
      <label htmlFor={labelName}>{labelTitle}</label>
      <textarea id={labelName} value={value} onChange={onChange} onBlur={onBlur}></textarea>
      {isError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.TextareaWrapper>
  );
};

export default Textarea;
