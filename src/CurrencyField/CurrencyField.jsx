import React from 'react';
import { validateCurrency } from '@propalytics-common/field/lib/validator/currency';
import CustomField from '../CustomField/CustomField';
import CurrencyInput from './CurrencyInput';
import { combineValidators } from '../utils/formUtil';

class CurrencyField extends React.PureComponent {
  static defaultProps = {
    className: null,
    placeholder: null,
    currencyCode: 'USD',
    isRequired: false,
  };

  render = () => {
    const {
      isRequired,
      validate,
      ...fieldProps
    } = this.props;
    return (
      <CustomField
        {...fieldProps}
        parse={inputValue => inputValue}
        format={formValue => formValue}
        validate={combineValidators(
          validateCurrency({
            optional: !isRequired,
          }),
          validate,
        )}
        component={CurrencyInput}
      />
    );
  }
}

export default CurrencyField;
