import { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { Button, Input, TextArea, Rate } from '..';
import { EMAIL_REGEXP } from '../../config/constants';
import { Storage } from '../../services/localStorage';
import { translations } from '../../utils/translations';
import * as S from './Form.styles';

const isNotEmpty = (value: string) => value.trim() !== '';
const isEmail = (value: string) => value.match(EMAIL_REGEXP);
const isFeedbackEmpty = (value: string) => value.length;

const BasicForm: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  const {
    value: userName,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);

  const {
    value: reviewValue,
    isValid: reviewIsValid,
    hasError: reviewHasError,
    valueChangeHandler: reviewChangeHandler,
    inputBlurHandler: reviewBlurHandler,
    reset: resetReview
  } = useInput(isFeedbackEmpty);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formIsValid) return;

    Storage.setReview({ userName, emailValue, reviewValue, rating });

    resetName();
    resetEmail();
    resetReview();
    setRating(0);
    setMessage(translations.msg_success_submit);
  };

  const formBlurHandler = () => {
    setMessage('');
  };

  const getUserRating = (rateValue: number) => {
    setRating(rateValue);
  };

  useEffect(() => {
    setFormIsValid(userNameIsValid && emailIsValid && reviewIsValid);
  }, [userName, emailValue, reviewValue]);

  return (
    <S.FormWrapper onSubmit={submitHandler} onBlur={formBlurHandler}>
      <Input
        value={userName}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        labelName="name"
        labelTitle={translations.msg_user_name_label}
        errorMessage={translations.msg_user_name_error}
        isError={userNameHasError}
      />
      <Input
        value={emailValue}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        labelName="email"
        labelTitle={translations.msg_user_email_label}
        errorMessage={translations.msg_user_email_error}
        isError={emailHasError}
      />
      <TextArea
        value={reviewValue}
        onChange={reviewChangeHandler}
        onBlur={reviewBlurHandler}
        labelName="feedback"
        labelTitle={translations.msg_user_review_label}
        errorMessage={translations.msg_user_review_error}
        isError={reviewHasError}
      />
      <Rate value={rating} onChange={getUserRating} />
      <Button type="submit" color="destructive" disabled={!formIsValid}>
        {translations.msg_button_submit}
      </Button>
      <S.SubmitMessageWrapper>{message}</S.SubmitMessageWrapper>
    </S.FormWrapper>
  );
};

export default BasicForm;
