import React = require('react');
import * as S from './Input.styles';

class Input extends React.Component<{
  isError?: any;
  labelName?: any;
  labelTitle?: any;
  type?: any;
  value?: any;
  onChange?: any;
  onBlur?: any;
  errorMessage?: any;
}> {
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
