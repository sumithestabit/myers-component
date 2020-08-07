import React from 'react';
import { formatIncompletePhoneNumber } from 'libphonenumber-js';
import { validatePhone } from '@propalytics-common/field/lib/validator/phone';
import CustomField from '../CustomField/CustomField';
import Input from '../Input/Input';
import { combineValidators } from '../utils/formUtil';

class PhoneField extends React.PureComponent {
  static defaultProps = {
    className: null,
    placeholder: null,
    country: 'US',
    isRequired: false,
  };

  formatPhoneNumber = value => (
    value !== undefined && value !== ''
      ? formatIncompletePhoneNumber(value, this.props.country)
      : undefined
  );

  render = () => {
    const {
      country,
      isRequired,
      validate,
      ...fieldProps
    } = this.props;
    return (
      <CustomField
        {...fieldProps}
        type="tel"
        validate={combineValidators(
          validatePhone({
            country,
            optional: !isRequired,
          }),
          validate,
        )}
        format={this.formatPhoneNumber}
        formatOnBlur
        component={Input}
      />
    );
  }
}

export default PhoneField;
