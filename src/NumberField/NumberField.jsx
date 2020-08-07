import React from 'react';
import CustomField from '../CustomField/CustomField';
import Input from '../Input/Input';

class NumberField extends React.PureComponent {
  static defaultProps = {
    className: null,
    placeholder: null,
  };

  parseNumber = (textValue) => {
    if (textValue === '') {
      return undefined;
    }
    const numberValue = Number(textValue);
    return Number.isNaN(numberValue) || textValue.endsWith('.') ? textValue : numberValue;
  };

  formatNumber = (value) => {
    const numberValue = Number(value);
    return Number.isNaN(numberValue) ? undefined : numberValue;
  }

  render = () => {
    const {
      isRequired,
      ...otherProps
    } = this.props;
    return (
      <CustomField
        {...otherProps}
        type="text"
        parse={this.parseNumber}
        format={this.formatNumber}
        formatOnBlur
        component={Input}
      />
    );
  };
}

export default NumberField;
