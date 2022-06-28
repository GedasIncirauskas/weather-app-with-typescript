import React from 'react';
import { InputProps } from '../../../ts/interfaces';
import * as S from './Input.styles';

class Input extends React.Component<InputProps> {
  render() {
    return (
      <S.InputWrapper showError={this.props.isError}>
        <label htmlFor={this.props.labelName}>{this.props.labelTitle}</label>
        <input
          type={this.props.type}
          id={this.props.labelName}
          value={this.props.value}
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
        />
        {this.props.isError && <S.ErrorMessage>{this.props.errorMessage}</S.ErrorMessage>}
      </S.InputWrapper>
    );
  }
}

export default Input;
